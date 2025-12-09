import { useState } from "react";
import {Card} from "react-bootstrap"

export default function Flashcard(props) {
  

  return (
    <Card
      style={{width: "30rem", height: "20rem", alignItems: "center", justifyContent: "center"}}
      onClick={() => props.setFlipped(!props.flipped)}
    >
      {props.flipped?<h2>{props.card.definition}</h2>:<h2>{props.card.term}</h2>}
    </Card>
  );
}
