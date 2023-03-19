import LetterBox from "./LetterBox";

import "./LetterBoard.css";
function LettersBoard({ answer }) {
  return (
    <div className="letter-board">
      {answer.map((letter, i) => {
        return <LetterBox letter={letter} key={i} />;
      })}
    </div>
  );
}

export default LettersBoard;
