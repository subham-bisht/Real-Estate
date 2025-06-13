// import React from "react";
import "./ProgressBar.css";

const steps = [
  "Basic Info",
  "Property Details",
  "General Info",
  "Location Info",
];

const ProgressBar = ({ step }) => {
  return (
    <div className="stepbar-container">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`step-item ${step === index + 1 ? "active" : ""}`}
        >
          <div className="step-number">{index + 1}</div>
          <div className="step-label">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
