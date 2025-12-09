import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import useStorage from "../useStorage.jsx"

export default function FlashcardTermSelectorModal(props) {
  const [excluded, setExcluded] = useState([]);
  const [decks, setDecks] = useStorage("decks", [])

  const toggleTerm = (term) => {
    setExcluded((prev) =>
      prev.includes(term) ? prev.filter((t) => t !== term) : [...prev, term]
    );
  };

  // Update included attribute for each card in the deck shown by the modal
  const handleSave = () => {
    // Find the deck being shown
    if (typeof props.deckId === "number") {
      const updatedDecks = decks.map((deck, idx) => {
        if (idx !== props.deckId) return deck;
        return {
          ...deck,
          cards: deck.cards.map(card => ({
            ...card,
            included: !excluded.includes(card.term)
          }))
        };
      });
      setDecks(updatedDecks);
    }

    props.onClose();
  };

  return (
    <Modal show={props.show} onHide={props.onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Select Terms to Exclude</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {decks[props.deckId].cards.map(({ term, definition }) => (
          <div key={term} className="mb-3 p-2 border rounded bg-light">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{term}</strong>
                <p className="m-0 text-muted" style={{ fontSize: "0.9rem" }}>
                  {definition}
                </p>
              </div>
              <Form.Check
                type="checkbox"
                label="Exclude"
                checked={excluded.includes(term)}
                onChange={() => toggleTerm(term)}
              />
            </div>
          </div>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
