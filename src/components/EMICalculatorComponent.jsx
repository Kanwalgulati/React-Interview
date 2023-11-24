import React from "react";
import EMICalculator from "../EMICalculator/EMICalculator";

function EMICalculatorComponent() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        EMI Calculator
      </div>
      <EMICalculator />
    </div>
  );
}

export default EMICalculatorComponent;
