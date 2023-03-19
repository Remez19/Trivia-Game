import "./LetterBox.css";

function LetterBox({ letter }) {
  return (
    <div
      className="letter-box"
      style={{
        borderBottom: letter.character === " " ? "none" : "",
        flexBasis: letter.character === " " ? "100%" : "",
        color: !letter.show && "transparent",
      }}
    >
      {letter.character}
    </div>
  );
}

export default LetterBox;
