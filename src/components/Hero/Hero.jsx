import { Jumbotron, Container } from 'react-bootstrap'
import './Hero.scss'
export default function Hero () {
    return (
        <Jumbotron fluid className="hero">
            <Container fluid>
                <h1 className="hero__heading">Designer</h1>
                <h1 className="hero__heading">+Web</h1>
                <h1 className="hero__heading">Developer</h1>
            </Container>
        </Jumbotron>
    )
}
