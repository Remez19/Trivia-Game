import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import OptionsPanel from "../UI/OptionsPanel";
import TitleShow from "../UI/TitleShow";
import useHttp from "../hooks/use-http";

import "./NewGamePage.css";

function NewGamePage() {
  const [options, setOptions] = useState(undefined);
  const navigate = useNavigate();

  const onCategoriesFetched = (categories) => {
    let result = [];
    for (let category in categories) {
      result.push({
        text: category,
        action: (e) => {
          navigate(`/new-game/${e.target.innerText}`);
        },
      });
    }
    setOptions(result);
  };

  const {
    error,
    isLoading,
    sendRequest: getCategories,
  } = useHttp({
    url: `${process.env.REACT_APP_API}/categories`,
    method: "GET",
    onFinish: onCategoriesFetched,
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (!options) getCategories();
  }, [error, getCategories, options]);

  return (
    <main className="new_game_page--container">
      <TitleShow title={"Choose Category"} animation={"_"} />
      {!isLoading && options && (
        <OptionsPanel vertical={true} options={options} buttonSize={"1rem"} />
      )}
    </main>
  );
}

export default NewGamePage;
