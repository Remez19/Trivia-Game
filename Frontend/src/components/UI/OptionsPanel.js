import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import "./OptionsPanel.css";

function OptionsPanel({ options, vertical, buttonSize }) {
  return (
    <div className="options_panel--container">
      <ButtonGroup className="options_panel--btn-group" vertical={vertical}>
        {options.map((option, i) => {
          return (
            <Button
              active={option.active}
              style={{
                fontSize: buttonSize,
                height: "fit-content",
              }}
              className="options_panel--btn"
              disabled={option.disabled}
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
