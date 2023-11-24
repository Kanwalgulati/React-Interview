import React, { useState } from "react";
import "./EMICalculator.css";
const EMICalculator = () => {
  const [cost, setCost] = useState(0);
  const [intrest, setIntrest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const updateEMI = () => {};
  const calculateEMI = () => {};
  const updateDownPayment = () => {};

  return (
    <div className="container">
      <span className="title">Total Cost of Asset</span>
      <input
        type="number"
        name=""
        id=""
        value={cost}
        onChange={(e) => {
          setCost(e.target.value);
        }}
        placeholder="Total Cost of Asset"
      />
      <span className="title">Interest Rate (in %)</span>
      <input
        type="number"
        name=""
        id=""
        value={intrest}
        onChange={(e) => {
          setIntrest(e.target.value);
        }}
        placeholder="Interest Rate (in %)"
      />
      <span className="title">Processing Fee (in %)</span>
      <input
        type="number"
        name=""
        id=""
        value={fee}
        onChange={(e) => {
          setFee(e.target.value);
        }}
        placeholder="Processing Fee (in %)"
      />
      <span className="title">Down Payment</span>
      <div>
        <input
          type="range"
          min={0}
          max={cost}
          className="slider"
          value={downPayment}
          onChange={updateEMI}
        />
        <div className="lables">
          <label>0%</label>
          <b>{downPayment}</b>
          <label>100%</label>
        </div>
      </div>
      <span className="title">EMI</span>
      <div>
        <input
          type="range"
          min={calculateEMI(cost)}
          max={calculateEMI(0)}
          className="slider"
          value={emi}
          onChange={updateDownPayment}
        />
        <div className="lables">
          <label>{calculateEMI(cost)}</label>
          <b>{downPayment}</b>
          <label>{calculateEMI(0)}</label>
        </div>
      </div>
      <span className="title">Tenure</span>
      <input
        type="number"
        name=""
        id=""
        value={cost}
        onChange={(e) => {
          setCost(e.target.value);
        }}
        placeholder="Total Cost of Asset"
      />
    </div>
  );
};

export default EMICalculator;
