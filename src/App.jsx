import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';

import DeckCreation from "./Pages/DeckCreation.jsx"
import DeckLibrary from "./Pages/DeckLibrary.jsx"
import StudyDeck from "./Pages/StudyDeck.jsx"
import FlashcardLayout from "./FlashcardLayout.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/p119/" element={<FlashcardLayout />}>
          <Route path="/p119/deck-creation" element={<DeckCreation/>}></Route>
          <Route path="/p119/deck-library" element={<DeckLibrary/>}></Route>
          <Route path="/p119/study-deck" element={<StudyDeck />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
