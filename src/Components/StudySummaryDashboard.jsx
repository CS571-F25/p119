import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import useStorage from "../useStorage.jsx"

export default function StudySummaryDashboard() {
    const [decks, setDecks] = useStorage("decks", [])
    const [currentDeck, setCurrentDeck] = useStorage("currentDeck", 0)

    const sum = decks[currentDeck].percentCorrect.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum/decks[currentDeck].percentCorrect.length

  return (
    <div className="card shadow-sm p-4 mt-4">
      <h4 className="mb-4">Deck Study Summary</h4>

      <Row className="gy-3 justify-content-center">
        <Col md={6} lg={3} className="mx-auto">
          <Card className="text-center p-3 border-info">
            <p className="text-muted">Times Studied</p>
            <h3>{decks[currentDeck].totalSessions}</h3>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mx-auto">
          <Card className="text-center p-3 border-info">
            <p className="text-muted">Last Accuracy</p>
            <h3>{decks[currentDeck].percentCorrect[decks[currentDeck].percentCorrect.length-1]}%</h3>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mx-auto">
          <Card className="text-center p-3 border-info">
            <p className="text-muted">Average Accuracy</p>
            <h3>{average}%</h3>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
