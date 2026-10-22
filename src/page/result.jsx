import React from "react";
import "./result.css";

function Result({ studentId, onBack }) {
  return (
    <div className="result-page">

      <div className="result-card">

        {/* Logo */}
        <div className="result-logo">
          <img
            src="/logo1.png"
            alt="IADC Logo"
          />
        </div>

        {/* Certificate ID */}
        <div className="info-row">
          <div className="info-label">
            Certificate
            <br />
            ID:
          </div>

          <div className="info-value">
            {studentId || "CC326493-05C784"}
          </div>
        </div>

        {/* Name */}
        <div className="info-row">
          <div className="info-label">
            Name:
          </div>

          <div className="info-value">
            Purshottam Bharmbhatt
          </div>
        </div>

        {/* Completed On */}
        <div className="info-row">
          <div className="info-label">
            Completed
            <br />
            On:
          </div>

          <div className="info-value">
          13 Octomber 2026
          </div>
        </div>

        {/* Expires On */}
        <div className="info-row">
          <div className="info-label">
            Expires On:
          </div>

          <div className="info-value">
           13 Octomber 2028
          </div>
        </div>

        {/* Program */}
        <div className="info-row">
          <div className="info-label">
            Program:
          </div>

          <div className="info-value">
            Drilling Operations,
            <br />
            Supervisor, Surface
          </div>
        </div>

        {/* Provider */}
        <div className="info-row">
          <div className="info-label">
            Provider:
          </div>

          <div className="info-value">
           Eagel Well Control
          </div>
        </div>

        {/* Status */}
        <div className="info-row">
          <div className="info-label">
            Status:
          </div>

          <div className="info-value status-active">
            Active
          </div>
        </div>

        {/* Back Button */}
        <button
          type="button"
          className="go-back-button"
          onClick={onBack}
        >
          Go Back
        </button>

      </div>

    </div>
  );
}

export default Result;