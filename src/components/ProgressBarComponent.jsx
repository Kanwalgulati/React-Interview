import React, { useEffect, useState } from "react";
import ProgressBar from "../progress-bar/ProgressBar";

function ProgressBarComponent() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
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
        Progress Bar
      </div>
      <ProgressBar
        value={value}
        onComplete={() => {
          setSuccess(true);
        }}
      />
      <span>{success ? "Complete!" : "Loading"}</span>
    </div>
  );
}

export default ProgressBarComponent;
