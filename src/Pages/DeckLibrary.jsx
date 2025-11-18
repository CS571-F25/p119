import {Col, Row, Container} from "react-bootstrap"
import {useState, useContext} from "react"
import { useNavigate } from 'react-router';

import DeckCard from "../Components/DeckCard.jsx"
import DeckContext from "../Context/DeckContext.js"

function DeckLibrary() {
    const navigate = useNavigate()
    const [decks, setDecks, currentDeck, setCurrentDeck] = useContext(DeckContext)

    const handleStudy = (deckId) => {
        console.log(deckId)
        setCurrentDeck(deckId)
        navigate("/p119/study-deck")
    }

    return(<>
        <Container fluid style={{alignItems: "left"}}>
            <Row>
                {decks.map((deck, i) => <Col xs={12} lg={6} xl={4} xxl={3} key={i}><DeckCard id={i} deck={deck} handleStudy={handleStudy}></DeckCard></Col>)}
            </Row>
        </Container>
    </>)
}

export default DeckLibrary