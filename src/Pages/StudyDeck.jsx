import {useContext, useState} from "react"
import {Container, Button, Col, Row, Form} from "react-bootstrap"

import DeckContext from "../Context/DeckContext.js"
import Flashcard from "../Components/Flashcard.jsx"
import FlashcardResult from "../Components/FlashcardResult.jsx"

function StudyDeck() {
    const [decks, setDecks, currentDeck, setCurrentDeck] = useContext(DeckContext)
    const [currentCard, setCurrentCard] = useState(0)
    const [flipped, setFlipped] = useState(false);
    const [done, setDone] = useState(false)
    const [stats, setStats] = useState(Array(decks[currentDeck].cards.length).fill(0))

    function handleFinish() {
        setDone(true)
    }

    function handleCheckboxChange(e) {
        const newStats = [...stats]
        newStats[currentCard] = e.target.checked
        setStats(newStats)
    }

    return(<>
    {!done?<Container className = "fluid d-flex align-items-center justify-content-center">
        <Row className="align-items-center">
            <Col>
                <Flashcard card={decks[currentDeck].cards[currentCard]} flipped={flipped} setFlipped={setFlipped}></Flashcard>
                <Form.Check label="Correct?" onChange={handleCheckboxChange} checked={stats[currentCard]}></Form.Check>
                {currentCard >= decks[currentDeck].cards.length-1? <Button onClick={handleFinish}>Finish</Button>: 
                <Button onClick={()=> {
                    setCurrentCard(prev => prev + 1)
                    setFlipped(false)
                }}>Next</Button>}
            </Col>
        </Row>
    </Container>
    :<Container>
        {decks[currentDeck].cards.map((card, i) => <FlashcardResult key={i} term={card.term} definition={card.definition} isCorrect={stats[i]}></FlashcardResult>)}
    </Container>}</>)
}

export default StudyDeck