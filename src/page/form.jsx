import React, { useState } from "react";
import "./form.css";

function Form({ onSearch }) {
  const [studentId, setStudentId] = useState("");
  const [instructor, setInstructor] = useState(false);
  const [error, setError] = useState("");

  const MY_ID = "1JAY2-3JAY4";

  const handleSearch = () => {
    const enteredId = studentId.trim().toUpperCase();

    if (!enteredId) {
      setError("Please enter Student Certificate ID.");
      return;
    }

    if (enteredId !== MY_ID) {
      setError("Invalid Student Certificate ID.");
      return;
    }

    setError("");

    if (typeof onSearch === "function") {
      onSearch(MY_ID);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <main className="form-page">
      <section className="form-card">

        {/* Logo */}
        <div className="logo">
          <img
            src="/logo1.png"
            alt="IADC Logo"
          />
        </div>

        {/* Form */}
        <div className="form-content">

          <label
            htmlFor="studentId"
            className="form-label"
          >
            Enter Student Certificate ID or Instructor Number
          </label>

          <input
            id="studentId"
            type="text"
            className="student-input"
            placeholder="Enter Student Certificate ID"
            value={studentId}
            onChange={(e) => {
              setStudentId(e.target.value);
              setError("");
            }}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />

          {/* Instructor */}
          <div className="instructor">
            <input
              id="instructor"
              type="checkbox"
              checked={instructor}
              onChange={(e) => {
                setInstructor(e.target.checked);
                setError("");
              }}
            />

            <label htmlFor="instructor">
              Instructor
            </label>
          </div>

          {/* Search */}
          <button
            type="button"
            className="search-button"
            onClick={handleSearch}
          >
            <span className="search-arrow">›</span>
            <span>Search</span>
          </button>

          {/* Error */}
          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

        </div>
      </section>
    </main>
  );
}

export default Form;