import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";
import {useState} from "react"

import DeckContext from "./Context/DeckContext.js"

const startingDecks = [{title: "Spanish Numbers", description: "", cards: [{term: "uno", definition: "one"}, {term: "dos", definition: "two"}, {term: "tres", definition: "three"}, {term: "cuatro", definition: "four"}, {term: "cinco", definition: "five"}]},
    {title: "JavaScript", description: "Basics of JS", cards: [{ term: "Variable", definition: "A named container that stores a value." },
    { term: "Function", definition: "Reusable block of code that performs an action." }, { term: "Array", definition: "An ordered list of values." },
    { term: "Object", definition: "A collection of key-value pairs." }, { term: "Promise", definition: "An object representing eventual completion of async work." }]}, 
    {title: "Parts of a cell", description: "Functions of the parts of a cell", cards: [{ term: "Nucleus", definition: "Controls cell activities and stores DNA." },
    { term: "Mitochondria", definition: "Produces energy through cellular respiration." }, { term: "Ribosome", definition: "Builds proteins in the cell." },
    { term: "Cell membrane", definition: "Regulates what enters and leaves the cell." },{ term: "Golgi apparatus", definition: "Packages and ships proteins." }]}]

function FlashcardLayout() {
    const [decks, setDecks] = useState(startingDecks)
    const [currentDeck, setCurrentDeck] = useState(0)

    return(
        <div>
        <Navbar bg="primary" variant="dark" sticky="top" className="app-navbar">
            <Container fluid>
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