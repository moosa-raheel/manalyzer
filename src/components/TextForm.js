import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const [text, textChange] = useState("");
  const uppercase = () => {
    textChange(text.toUpperCase());
  };
  const clearText = () => {
    textChange("");
  };
  const copy = () => {
    let copyText = document.getElementById("text");
    navigator.clipboard.writeText(copyText.value);
  };
  const onchange = (e) => {
    textChange(e.target.value);
  };
  const textArray = text.split(/\s+/);
  const pureTextArray = textArray.filter((a) => {
    return a !== "";
  });
  const lowercase = () => {
    textChange(text.toLowerCase());
  };
  const reverse = () => {
    const wordArray = text.split(" ");
    wordArray.reverse();
    const word = wordArray.join(" ");
    textChange(word);
  };
  const btn = {
    opacity: text.length === 0 ? 0.5 : 1,
    "pointer-events": "",
    cursor: text.length === 0 ? "not-allowed" : "pointer",
  };
  return (
    <div className="container">
      <h1 className="heading" style={props.style}>
        {props.heading}
      </h1>
      <textarea
        name="text"
        id="text"
        cols="30"
        rows="15"
        placeholder="Enter Your Text Here"
        value={text}
        onChange={onchange}
      ></textarea>
      <button className="btn" onClick={clearText} style={btn}>
        Clear Text
      </button>
      <button className="btn" onClick={uppercase} style={btn}>
        Convert To UpperCase
      </button>
      <button className="btn" onClick={lowercase} style={btn}>
        Convert To LowerCase
      </button>
      <button className="btn" onClick={reverse} style={btn}>
        Reverse Text
      </button>
      <button className="btn" onClick={copy} style={btn}>
        Copy Text
      </button>
      <div className="summary">
        <h1>Your Text Summary</h1>
        <span>{text.length} Charecters</span>
        <span>{pureTextArray.length} Words</span>
      </div>
      <div className="convert">
        <h1>Preview</h1>
        <p className="preview">
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </div>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
