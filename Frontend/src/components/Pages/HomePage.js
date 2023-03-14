import React from "react";
import { useNavigate } from "react-router-dom";

import TitleShow from "../UI/TitleShow";
import OptionsPanel from "../UI/OptionsPanel";

import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="home_page-container">
      <TitleShow title={"Hello And Welcome!"} />
      <OptionsPanel
        options={[
          {
            text: "New Game",
            action: () => {
              navigate("/new-game");
            },
          },
          {
            text: "Leaderboards",
            action: () => {
              console.log("Leaderboards");
            },
          },
          {
            text: "Login",
            action: () => {
              console.log("Login");
            },
          },
        ]}
      />
    </main>
  );
}

export default HomePage;
