import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

function ProgressBar({ value = 0, onComplete }) {
  const [percentage, setPercentage] = useState(value);
  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
    if (value >= 100) {
      onComplete();
    }
  }, [value]);
  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuenow={`${percentage.toFixed()}`}
      aria-valuemin={0}
      aria-aria-valuemax={100}
    >
      <span style={{ color: percentage < 49 ? "blank" : "white" }}>
        {percentage.toFixed()}%
      </span>
      <div
        className="progressBarFilled"
        //style={{ width: `${percentage}%` }}
        style={{
          transform: `scaleX(${percentage / 100})`,
          transformOrigin: "left",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
