import React from "react";

import "./TitleShow.css";

function TitleShow({ title }) {
  return (
    <div className="title_show--container">
      <p className="title_show--title">{title}</p>
    </div>
  );
}

export default TitleShow;
