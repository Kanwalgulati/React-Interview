import React from "react";
import Password from "../password-generator/Password";

function PasswordGenerator() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "7px",
      }}
    >
      <div
        style={{
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        Password Generator
      </div>
      <Password />
    </div>
  );
}

export default PasswordGenerator;
