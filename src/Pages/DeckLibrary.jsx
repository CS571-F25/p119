import {Col, Row, Container} from "react-bootstrap"
import {useState, useContext} from "react"
import { useNavigate } from 'react-router';

import DeckCard from "../Components/DeckCard.jsx"
import DeckContext from "../Context/DeckContext.js"
import useStorage from "../useStorage.jsx"
import FlashcardTermSelectorModal from "../Components/FlashcardTermSelectorModal.jsx";

function DeckLibrary() {
    const navigate = useNavigate()
    //const [decks, setDecks, currentDeck, setCurrentDeck] = useContext(DeckContext)
    const [decks, setDecks] = useStorage("decks", [])
    const [currentDeck, setCurrentDeck] = useStorage("currentDeck", 0)
    const [deckModal, setDeckModal] = useState(false)

    const handleStudy = (deckId) => {
        setCurrentDeck(deckId)
        navigate("/p119/study-deck")
    }

    const handleView = (deckId) => {
        setCurrentDeck(deckId)
        setDeckModal(true)
    }

    function onClose() {
        setDeckModal(false)
    }

    return(<>
        <Container fluid style={{alignItems: "left"}}>
            <Row>
                {decks.map((deck, i) => <Col xs={12} lg={6} xl={4} xxl={3} key={i}><DeckCard id={i} deck={deck} handleStudy={handleStudy} handleView={handleView}></DeckCard></Col>)}
            </Row>
        </Container>
        <FlashcardTermSelectorModal show={deckModal} onClose={onClose} deckId={currentDeck}/>
    </>)
}

export default DeckLibrary