import {Card, Button} from "react-bootstrap"

function DeckCard(props) {
    return(<>
        <Card>
            <p>{props.deck.title}</p>
            <p>{props.deck.description}</p>
            <div className="d-flex gap-2 justify-content-center">
                <Button onClick={() => props.handleStudy(props.id)}>Study</Button>
                <Button onClick={() => props.handleView(props.id)}>View Set</Button>
            </div>
        </Card>
    </>)
}

export default DeckCard