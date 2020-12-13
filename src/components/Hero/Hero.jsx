import { Jumbotron, Container } from 'react-bootstrap'
import './Hero.scss'
export default function Hero () {
    return (
        <Jumbotron fluid className="hero">
            <Container fluid>
                <h1>Designer</h1>
                <h1>+Web</h1>
                <h1>Developer</h1>
            </Container>
        </Jumbotron>
    )
}
