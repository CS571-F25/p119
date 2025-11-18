import CreateDeckForm from "../Components/CreateDeckForm.jsx"
import CreateFlashCardForm from "../Components/CreateFlashCardForm.jsx"
import DeckContext from "../Context/DeckContext.js"
import {useState, useContext} from "react"
import {Button} from "react-bootstrap"
import { useNavigate } from 'react-router';

function DeckCreation() {
    const [enterCards, setEnterCards] = useState(false)
    const [decks, setDecks] = useContext(DeckContext)
    const [currentDeck, setCurrentDeck] = useState(null)
    const [runningCards, setRunningCards] = useState([])
    const navigate = useNavigate()

    const handleCreateDeck = (newDeck) => {
        setEnterCards(true)
        setCurrentDeck(newDeck)
    };

    const onAdd = (newCard) => {
        setRunningCards(prevCards => [...prevCards, newCard])
    }

    function onDone() {
        setCurrentDeck(prevState => ({
            ...prevState,
            cards: runningCards
        }))
        setDecks(prevDecks => [...prevDecks, currentDeck])
        navigate("/p119/deck-library")
    }

    return(
    <div className="container mt-5">
        {!enterCards?<><h1>Get Started by creating your own deck!</h1>
        <CreateDeckForm onCreate={handleCreateDeck} /></>:
        <>
            <CreateFlashCardForm onAdd={onAdd}/>
        </>
        }
        <Button onClick={onDone}>Done</Button>
    </div>)  
}

export default DeckCreation