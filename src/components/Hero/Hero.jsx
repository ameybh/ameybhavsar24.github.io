import { Jumbotron, Container } from 'react-bootstrap'
import './Hero.css'
export default function Hero () {
    return (
        <Jumbotron className="hero">
            <Container fluid>
                <h1>Hero Section</h1>
            </Container>
        </Jumbotron>
    )
}
