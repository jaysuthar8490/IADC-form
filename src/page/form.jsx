import React, { useState } from "react";
import "./form.css";

function Form({ onSearch }) {
  // Aapki fixed ID
  const MY_ID = "1JAY2-3JAY4";

  // ID already input me show hogi
  const [studentId, setStudentId] = useState(MY_ID);

  const handleSearch = () => {
    // Direct aapki ID ke saath Result page open
    if (onSearch) {
      onSearch(MY_ID);
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

          {/* Your ID automatically visible */}
          <input
            id="studentId"
            type="text"
            className="student-input"
            value={studentId}
            readOnly
          />

          {/* Instructor */}
          <div className="instructor">
            <input
              type="checkbox"
              id="instructor"
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

        </div>
      </section>
    </main>
  );
}

export default Form;