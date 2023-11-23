import React from "react";


function PassowordStreanth({ password }) {
  const getPasswordStrenth = () => {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Week";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else return "Very Strong";
  };
  const passwordStreanth = getPasswordStrenth();
  if (!passwordStreanth) return <React.Fragment />;
  return (
    <div className="password-strenth">
      Strenth : <span style={{ fontWeight: "bold" }}>{passwordStreanth}</span>
    </div>
  );
}

export default PassowordStreanth;
