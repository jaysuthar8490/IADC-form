import React, { useState } from "react";
import Form from "./page/form";
import Result from "./page/result";

function App() {
  const [currentPage, setCurrentPage] = useState("form");
  const [studentId, setStudentId] = useState("");

  // Search button click
  const handleSearch = (id) => {
    setStudentId(id);
    setCurrentPage("result");
  };

  // Go Back
  const handleBack = () => {
    setCurrentPage("form");
  };

  return (
    <div>
      {currentPage === "form" && (
        <Form onSearch={handleSearch} />
      )}

      {currentPage === "result" && (
        <Result
          studentId={studentId}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;