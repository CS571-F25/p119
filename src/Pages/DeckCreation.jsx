import CreateDeckForm from "../Components/CreateDeckForm.jsx"
import CreateFlashCardForm from "../Components/CreateFlashCardForm.jsx"
import DeckContext from "../Context/DeckContext.js"
import {useState, useContext} from "react"
import {Button} from "react-bootstrap"
import { useNavigate } from 'react-router';
import useStorage from "../useStorage.jsx"
import DeckReview from "../Components/DeckReview.jsx"

function DeckCreation() {
    const [enterCards, setEnterCards] = useState(false)
    const [decks, setDecks] = useStorage("decks", [])
    const [runningCards, setRunningCards] = useState([])
    const [createdSet, setCreatedSet] = useState({})
    const [showReview, setShowReview] = useState(false)
    const navigate = useNavigate()

    const handleCreateDeck = (newDeck) => {
        setEnterCards(true)
        setCreatedSet(newDeck)
    };

    const onAdd = (newCard) => {
        setRunningCards(prevCards => [...prevCards, newCard])
    }

    function onReview() {
        setShowReview(true)
    }

    function onDone() {
        const newDeck = { ...createdSet, cards: runningCards };
        setDecks(prevDecks => [...prevDecks, newDeck]);
        navigate("/p119/deck-library");
    }

    
    const deleteCard = (term) => {
        setRunningCards(runningCards.filter(card => card.term !== term));
    }

    return(
    <div className="container mt-5">
        {!enterCards ? (
            <>
                <h1>Get started by creating your own deck!</h1>
                <CreateDeckForm onCreate={handleCreateDeck} />
            </>
        ) : (
            <>
                <CreateFlashCardForm onAdd={onAdd}/>
                <Button className="mt-3" onClick={onReview}>Review</Button>
                <DeckReview
                    show={showReview}
                    handleClose={() => setShowReview(false)}
                    deckName={createdSet.title}
                    cards={runningCards}
                    onDeleteCard={deleteCard}
                    onAddMore={() => setShowReview(false)} 
                    onAcceptDeck={onDone}
                />
            </>
        )}
    </div>)  
}

export default DeckCreation