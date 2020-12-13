import { Jumbotron, Container } from 'react-bootstrap'
import './Hero.scss'
export default function Hero () {
    return (
        <Jumbotron fluid className="hero">
            <Container fluid>
                <h1 className="hero__heading">I build</h1>
                <h1 className="hero__heading">websites.</h1>
                <h1 className="hero__heading animateDelay-1">For &nbsp;you.</h1>
            </Container>
        </Jumbotron>
    )
}
