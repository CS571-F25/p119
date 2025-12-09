import React, { useState } from "react";

export default function CreateFlashcardForm(props) {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim() || !definition.trim()) return;

    props.onAdd({
      term: term.trim(),
      definition: definition.trim(),
      included: true
    });

    setTerm("");
    setDefinition("");
  };

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h5 className="card-title">Add a Flashcard</h5>
        <form onSubmit={handleSubmit}>
          {/* Term */}
          <div className="mb-3">
            <label htmlFor="flashcard-term" className="form-label">Term</label>
            <input
              id="flashcard-term"
              type="text"
              className="form-control"
              placeholder="Enter term..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              required
            />
          </div>
          {/* Definition */}
          <div className="mb-3">
            <label htmlFor="flashcard-definition" className="form-label">Definition</label>
            <textarea
              id="flashcard-definition"
              className="form-control"
              rows={3}
              placeholder="Enter definition..."
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Add Flashcard
          </button>
        </form>
      </div>
    </div>
  );
}
