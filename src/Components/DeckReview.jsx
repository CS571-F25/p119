import React from "react";
import { Button, Card, ListGroup, Row, Col, Modal } from "react-bootstrap";
import useStorage from "../useStorage.jsx"

export default function DeckReview ({
  show,
  handleClose,
  deckName,
  cards,
  onDeleteCard,
  onAddMore,
  onAcceptDeck,
}) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>{deckName} - Review Cards</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
        {cards.length === 0 ? (
          <p className="text-center text-secondary">
            No cards added yet — add some before finishing!
          </p>
        ) : (
          <ListGroup>
            {cards.map((card, index) => (
              <ListGroup.Item key={index} className="mb-2 shadow-sm rounded">
                <Row className="align-items-center">
                  <Col xs={9}>
                    <Card.Body>
                      <Card.Title>
                        {index + 1}. {card.term}
                      </Card.Title>
                      <Card.Text className="text-muted">
                        {card.definition}
                      </Card.Text>
                    </Card.Body>
                  </Col>

                  <Col xs={3} className="text-end">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onDeleteCard(card.term)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onAddMore}>
          + Add More Cards
        </Button>

        <Button
          variant="success"
          disabled={cards.length === 0}
          onClick={onAcceptDeck}
        >
          Save Deck
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


