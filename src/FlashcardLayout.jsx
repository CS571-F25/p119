import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";
import {useState} from "react"

import DeckContext from "./Context/DeckContext.js"
import useStorage from "./useStorage.jsx"

const startingDecks = [{title: "Spanish Numbers", description: "", totalSessions: 0, percentCorrect: [], cards: [{term: "uno", definition: "one", included: true}, {term: "dos", definition: "two", included: true}, {term: "tres", definition: "three", included: true}, {term: "cuatro", definition: "four", included: true}, {term: "cinco", definition: "five", included: true}]},
    {title: "JavaScript", description: "Basics of JS", totalSessions: 0, percentCorrect: [],cards: [{ term: "Variable", definition: "A named container that stores a value." , included: true},
    { term: "Function", definition: "Reusable block of code that performs an action." , included: true}, { term: "Array", definition: "An ordered list of values." , included: true },
    { term: "Object", definition: "A collection of key-value pairs.", included: true }, { term: "Promise", definition: "An object representing eventual completion of async work." , included: true}]}, 
    {title: "Parts of a cell", description: "Functions of the parts of a cell", totalSessions: 0, percentCorrect: [],cards: [{ term: "Nucleus", definition: "Controls cell activities and stores DNA.", included: true },
    { term: "Mitochondria", definition: "Produces energy through cellular respiration." , included: true}, { term: "Ribosome", definition: "Builds proteins in the cell." , included: true},
    { term: "Cell membrane", definition: "Regulates what enters and leaves the cell." , included: true},{ term: "Golgi apparatus", definition: "Packages and ships proteins." , included: true}]}]

function FlashcardLayout() {
    const [decks, setDecks] = useStorage("decks", startingDecks)
    const [currentDeck, setCurrentDeck] = useStorage("currentDeck", 0)

    return(
        <div>
        <Navbar bg="primary" variant="dark" sticky="top" className="app-navbar">
            <Container fluid>
                <Navbar.Brand className="fw-bold">Flashcard Flipper</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="deck-creation">Deck Creation</Nav.Link>
                    <Nav.Link as={Link} to="deck-library">Deck Library</Nav.Link>
                    <Nav.Link as={Link} to="study-deck">Study Deck</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div style={{ margin: "1rem" }}>
            <DeckContext.Provider value={[decks, setDecks, currentDeck, setCurrentDeck]}>
                <Outlet />
            </DeckContext.Provider>
        </div>
        </div>
    )
}

export default FlashcardLayout