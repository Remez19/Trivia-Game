import React from "react";

import OptionsPanel from "../UI/OptionsPanel";

import "./NewGamePage.css";

function NewGamePage() {
  let characters = [];

  // 91
  for (let i = 65; i < 89; i++)
    characters.push({
      text: String.fromCharCode(i),
      action: (e) => {
        console.log(e.target.innerText);
      },
    });
  return (
    <main className="new_game_page--container">
      <OptionsPanel
        vertical={false}
        buttonSize={"2.5rem"}
        options={characters}
      />
    </main>
  );
}

export default NewGamePage;
