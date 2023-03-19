import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import useHttp from "../hooks/use-http";

import Badge from "react-bootstrap/Badge";

import TitleShow from "../UI/TitleShow";
import OptionsPanel from "../UI/OptionsPanel";
import LettersBoard from "../UI/LettersBoard";

import "./GamePage.css";

const SAMPLE_DVIDER = 3;

function GamePage({ multi }) {
  const { category } = useParams();
  //   category =
  const [questions, setQuestions] = useState();
  const [answer, setAnswer] = useState();
  const [questionNumber, setQuestionNumber] = useState();
  const [counterStrikes, setCounterStrikes] = useState(0);
  const [counterScore, setCounterScore] = useState(0);
  const [multiplyer, setMultiplyer] = useState(50 || multi);
  const [keyboard, setKeyboard] = useState();

  const onKeyPressed = (event) => {
    let letterPressedAsci = event.target.innerText.charCodeAt(0);
    let tempAnswer = [...answer];

    let score = 0;
    for (let letter of tempAnswer) {
      if (
        (letter.character.charCodeAt(0) === letterPressedAsci ||
          letter.character.charCodeAt(0) === letterPressedAsci + 32) &&
        !letter.show
      ) {
        score++;
        letter.show = true;
      }
    }
    if (!score) {
      setCounterStrikes((counter) => counter + 1);
      // Set KeyBoard
      setKeyboard((prevKeyboard) => {
        for (let letter of prevKeyboard) {
          let asciLetter = letter.text.charCodeAt(0);
          if (asciLetter === letterPressedAsci) {
            letter.disabled = true;
            break;
          }
        }
        return prevKeyboard;
      });
    } else {
      setCounterScore((prevScore) => prevScore + score * multiplyer);
      setKeyboard((prevKeyboard) => {
        for (let letter of prevKeyboard) {
          let asciLetter = letter.text.charCodeAt(0);
          if (asciLetter === letterPressedAsci) {
            letter.active = true;
            break;
          }
        }
        return prevKeyboard;
      });
    }
    setAnswer(tempAnswer);
  };

  const onQuestionsFetched = (questions) => {
    // Getting a Random sample of words to present
    let transformedAnswer = [];
    let answerLength = questions[0].correctAnswer.length;
    for (let letter of questions[0].correctAnswer) {
      transformedAnswer.push({
        character: letter,
        show: true,
      });
    }
    let sampleSize = Math.floor(answerLength / SAMPLE_DVIDER);
    for (let iteration = 0; iteration < sampleSize; iteration++) {
      let index = Math.floor(Math.random() * answerLength);
      transformedAnswer[index].show = false;
    }
    setAnswer(transformedAnswer);
    setQuestions(questions);
    setQuestionNumber(0);
    console.log(questions[0].correctAnswer);
  };
  const {
    isLoading,
    error,
    sendRequest: getQuestion,
  } = useHttp({
    url: `${process.env.REACT_APP_API}/questions?categories=${category
      .replace(/ /g, "_")
      .replace(/&/g, "and")}&limit=5`,
    method: "GET",
    onFinish: onQuestionsFetched,
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    getQuestion();
  }, [error]);

  let keyboardPanel = [];
  for (let asci = 65; asci < 91; asci++) {
    keyboardPanel.push({
      text: String.fromCharCode(asci),
      action: onKeyPressed,
      disabled: false,
      active: false,
    });
  }
  useEffect(() => {
    if (answer && counterStrikes === 0) setKeyboard(keyboardPanel);
  }, [answer]);

  return (
    <main className="game_page--conainer">
      <TitleShow title={`Category: ${category}`} animation={"_"} />
      <div className="game_page--counters-container">
        <Badge className="game_page--badge" bg="success">
          {counterScore}
        </Badge>
        <Badge
          bg="danger"
          className="game_page--badge"
          style={{ fontSize: "0.7rem", margin: 0 }}
        >
          Timer
        </Badge>
        <Badge bg="danger" className="game_page--badge">
          {counterStrikes}
        </Badge>
      </div>

      {!isLoading && questions && (
        <TitleShow animation={"_"} title={questions[questionNumber].question} />
      )}
      {!isLoading && questions && answer && <LettersBoard answer={answer} />}
      {!isLoading && questions && keyboard && (
        <OptionsPanel options={keyboard} vertical={false} />
      )}
    </main>
  );
}

export default GamePage;
