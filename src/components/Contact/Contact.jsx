import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import './Contact.scss'
import { MdMessage } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail, SiTwitter} from 'react-icons/si';
export default function Work() {
    return (
        <a name="contact">
        <Container fluid className="contact section-content">
            <Row>
                <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center">
                  <div className="section-heading">
                    Contact
                    <hr />
                  </div>    
                </Col>
                <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center section-img">
                    <MdMessage />
                </Col>
            </Row>
            <Row>
              <Col xs={12} className="d-flex align-items-end">
                <div className="contact__text">
                    <a href="https://www.linkedin.com/in/b-amey/"><FaLinkedin /></a>
                    <a href="https://github.com/ameybhavsar24/"><FaGithub /></a>
                    <a href="mailto:iamamey24+portfolio@gmail.com"><SiGmail /></a>
                    <a href="https://twitter.com/ameybhavsar24"><SiTwitter/></a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <hr style={{ maxWidth: '10rem', margin: '0 auto'}}/>
              </Col>
            </Row>

        </Container>
        </a>
    )
}
