import React, { useState } from "react";
import "./password-generator.css";
import usePasswordGenerator from "./hooks/use-password-generator";
import PassowordStreanth from "./PassowordStreanth";

function Password() {
  const [charLength, setCharLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Lettres", state: false },
    { title: "Include Lowercase Lettres", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [isCopy, setIsCopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };
  const handleCheckBoxChange = (index) => {
    let updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    console.log(
      "file: Password.jsx:21 ~ handleCheckBoxChange ~ updatedCheckboxData:",
      updatedCheckboxData
    );
    setCheckboxData(updatedCheckboxData);
  };
  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  return (
    <div className="container">
      {/* Password Text and Copy button */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button className="copyBtn" onClick={() => handleCopy()}>
            {isCopy ? "Copied" : "Copy"}
          </button>
        </div>
      )}
      {/* Character Length */}
      <div className="charLength">
        <span>
          <label> Character Length</label>
          <label>{charLength}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={charLength}
          onChange={(e) => {
            setCharLength(e.target.value);
          }}
        />
      </div>
      {/* CheckBoxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                checked={checkbox.state}
                onChange={() => {
                  handleCheckBoxChange(i);
                }}
              />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
      </div>
      {/* Strenth */}
      <PassowordStreanth password={password} />
      {/* Error Handling */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      {/* Generate Button */}
      <button
        className="generateBtn"
        onClick={() => {
          generatePassword(checkboxData, charLength);
          setIsCopy(false);
        }}
      >
        Generate Password
      </button>
    </div>
  );
}

export default Password;
