import React from "react";

import "./TitleShow.css";

function TitleShow({ title }) {
  return (
    <div className="titleshow-container">
      <p className="titleshow-title">{title}</p>
    </div>
  );
}

export default TitleShow;
