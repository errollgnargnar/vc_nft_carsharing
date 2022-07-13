import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
 
export default function SeasonCard({season}) {
    return (
        <Card style={{ width: '18rem' }} bg="dark">
            <Card.Header>{season}</Card.Header>
            <ListGroup variant="flush" bg="variant">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}