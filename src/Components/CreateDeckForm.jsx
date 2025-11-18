import React, { useState } from "react";

export default function CreateDeckForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    // Pass data up to parent component
    onCreate({
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString(),
    });

    // Clear form
    setTitle("");
    setDescription("");
  };

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h5 className="card-title">Create a New Deck</h5>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-3">
            <label className="form-label">Deck Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter deck name..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description (optional) */}
          <div className="mb-3">
            <label className="form-label">Description (optional)</label>
            <textarea
              className="form-control"
              rows={3}
              placeholder="What is this deck about?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Create Deck
          </button>
        </form>
      </div>
    </div>
  );
}
