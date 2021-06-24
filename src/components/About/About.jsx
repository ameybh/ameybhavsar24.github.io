import { Container, Row, Col} from 'react-bootstrap'
import './About.scss'
import ProfileWEBP from '../../assets/profile.webp'

export default function About() {
    return (
        <a name="about">
        <Container fluid className="about">
            <Row>
                <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center">
                  <div className="about__heading">
                    About
                    <hr />
                  </div>    
                </Col>
                <Col xs={12} sm={6} className="d-flex align-items-start justify-content-center about__profile">
                    <img src={ProfileWEBP} alt="Amey's profile" className="about__profile__img" />
                </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} className="d-flex align-items-end">
                <div className="about__text">
                  Hey! My name is Amey Bhavsar.
                  <p>I am a Front-end React Developer. </p>
                </div>
              </Col>
            </Row>
        </Container>
        </a>
    )
}
