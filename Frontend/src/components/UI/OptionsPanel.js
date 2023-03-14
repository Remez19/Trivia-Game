import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import "./OptionsPanel.css";

function OptionsPanel({ options }) {
  return (
    <div className="options_panel--container">
      <ButtonGroup vertical style={{ backgroundColor: "transparent" }}>
        {options.map((option, i) => {
          return (
            <Button
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
