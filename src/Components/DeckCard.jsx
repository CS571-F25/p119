import {Card, Button} from "react-bootstrap"

function DeckCard(props) {
    return(<>
        <Card>
            <p>{props.deck.title}</p>
            <p>{props.deck.description}</p>
            <Button onClick={() => props.handleStudy(props.id)}>Study</Button>
        </Card>
    </>)
}

export default DeckCard