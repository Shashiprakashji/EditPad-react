import { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    console.log("Button Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLowClick = () => {
    console.log("Button Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} Characters{" "}
        </p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
export default TextForm;
