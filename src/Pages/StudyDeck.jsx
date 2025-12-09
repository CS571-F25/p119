import {useContext, useState} from "react"
import {Container, Button, Col, Row, ProgressBar} from "react-bootstrap"

import DeckContext from "../Context/DeckContext.js"
import Flashcard from "../Components/Flashcard.jsx"
import FlashcardResult from "../Components/FlashcardResult.jsx"
import useStorage from "../useStorage.jsx"
import StudyBar from "../Components/StudyBar.jsx"
import StudySummaryDashboard from "../Components/StudySummaryDashboard.jsx"

function StudyDeck() {
    const [decks, setDecks] = useStorage("decks", [])
    const [currentDeck, setCurrentDeck] = useStorage("currentDeck", 0)
    // Only study cards with included: true
    const includedCards = decks[currentDeck]?.cards?.filter(card => card.included !== false) || [];
    const [currentCard, setCurrentCard] = useState(0)
    const [flipped, setFlipped] = useState(false);
    const [done, setDone] = useState(false)
    const [stats, setStats] = useState(Array(includedCards.length).fill(0))
    const [totalCorrect, setTotalCorrect] = useState(0)

    function handleAnswer(isCorrect) {
        if (isCorrect) {
            setTotalCorrect(prev => prev + 1)
        }
        const newStats = [...stats];
        newStats[currentCard] = isCorrect ? 1 : 0;
        setStats(newStats);
        if (currentCard >= includedCards.length - 1) {
            const percent = includedCards.length > 0 ? Math.round((totalCorrect/ includedCards.length) * 100) : 0;

            setDecks(prevDecks => {
                return prevDecks.map((deck, idx) => {
                    if (idx !== currentDeck) return deck;
                    return {
                        ...deck,
                        totalSessions: (deck.totalSessions || 0) + 1,
                        percentCorrect: Array.isArray(deck.percentCorrect)
                            ? [...deck.percentCorrect, percent]
                            : [percent]
                    };
                });
            });
            setDone(true);
        } else {
            setCurrentCard(prev => prev + 1);
            setFlipped(false);
        }
    }

    function handleRestudy() {
        setCurrentCard(0)
        setDone(false)
        setStats(Array(includedCards.length).fill(0))
        setTotalCorrect(0)
    }

    return(<>
    {!done?
        <Container className="fluid d-flex align-items-center justify-content-center">
            <Row className="align-items-center">
                <Col>
                    <StudyBar current={currentCard} total={includedCards.length} />
                    <Flashcard card={includedCards[currentCard]} flipped={flipped} setFlipped={setFlipped} />
                    <div className="d-flex gap-2 justify-content-center mt-3">
                        <Button variant="success" onClick={() => handleAnswer(true)}>Correct</Button>
                        <Button variant="danger" onClick={() => handleAnswer(false)}>Incorrect</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        :
        <Container>
            <StudySummaryDashboard />
            {includedCards.map((card, i) => (
                <FlashcardResult key={i} term={card.term} definition={card.definition} isCorrect={stats[i]} />
            ))}
            <Button onClick={handleRestudy}>Restudy</Button>
        </Container>
    }</>)
}

export default StudyDeck