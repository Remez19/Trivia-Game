import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import "./OptionsPanel.css";

function OptionsPanel({ options, vertical, buttonSize }) {
  return (
    <div className="options_panel--container">
      <ButtonGroup
        vertical={vertical}
        style={{ backgroundColor: "transparent", flexWrap: "warp" }}
      >
        {options.map((option, i) => {
          return (
            <Button
              style={{ width: buttonSize, height: buttonSize }}
              className="options_panel--btn"
              key={i}
              onClick={option.action}
            >
              {option.text}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
}

export default OptionsPanel;
