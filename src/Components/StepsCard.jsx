import Card from "react-bootstrap/Card";

export default function StepCard({title, icon, desc}) {
    return (
        <Card style={{ width: '18rem', margin: "3%", height:"15rem" }}>
            <Card.Body style={{backgroundColor:"#6e5431", display: "flex", flexDirection:"column", justifyContent:"space-evenly", padding: "1rem"}}>
                <Card.Title>{title}</Card.Title>
                <Card.Text >
                    {icon} <br/>
                    <p style={{margin:"2%"}}>
                        {desc}
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}