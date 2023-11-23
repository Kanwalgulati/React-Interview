import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const generatePassword = (checkboxData = [], length = 4) => {
    console.log("file: use-password-generator.jsx:7 ~ generatePassword ~ checkboxData:", checkboxData)
    let charSet = "",
      generatedPassword = "";
    const selectedOptions = checkboxData.filter(({ state }) => state);
    if (selectedOptions.length == 0) {
      setErrorMessage("Select atleast one option.");
      setPassword("");
      return;
    }
    selectedOptions.forEach(({ title }) => {
      switch (title) {
        case "Include Uppercase Lettres": {
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        }
        case "Include Lowercase Lettres": {
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        }
        case "Include Numbers": {
          charSet += "0123456789";
          break;
        }
        case "Include Symbols": {
          charSet += "!@#$%^&*()";
          break;
        }
      }
    });
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
    setErrorMessage("");
  };
  return { password, errorMessage, generatePassword };
};
export default usePasswordGenerator;
