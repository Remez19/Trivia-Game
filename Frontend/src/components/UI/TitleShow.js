import React from "react";

import "./TitleShow.css";

function TitleShow({ title, animation }) {
  return (
    <div className="title_show--container">
      <p className="title_show--title" style={{ animation: animation }}>
        {title}
      </p>
    </div>
  );
}

export default TitleShow;
