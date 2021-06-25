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
                  Hey! I'm <b>Amey Bhavsar</b>.<br/>
                  <p>Web developer — MongoDB, Express, NodeJS, React.<br/>Competitive programmer — <a href="https://www.codechef.com/users/ameybhavsar">Codechef</a>, <a href="https://codeforces.com/profile/bhavsar">Codeforces</a>.</p>
                  <p>Currently, computer science junior (<i>third year</i>) at <a href="http://slrtce.in">Shree LR Tiwari College of Engineering</a>, University of Mumbai.</p>
                </div>
                <div classname="about__">

                </div>
              </Col>
            </Row>
        </Container>
        </a>
    )
}
