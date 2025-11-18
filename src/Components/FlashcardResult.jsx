import React from "react";

export default function FlashcardResult({ term, definition, isCorrect }) {
  return (
    <div className={`card shadow-sm mt-3 ${isCorrect ? "border-success" : "border-danger"}`}>
      <div className="card-body">
        <h5 className="card-title">{term}</h5>
        <p className="card-text">{definition}</p>

        <div className="mt-2">
          {isCorrect ? (
            <span className="badge bg-success">Correct</span>
          ) : (
            <span className="badge bg-danger">Incorrect</span>
          )}
        </div>
      </div>
    </div>
  );
}
