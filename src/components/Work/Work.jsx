import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import './Work.scss'
import { GrPersonalComputer} from 'react-icons/gr';
import Projects from './projects';
export default function Work() {
    return (
        <a name="projects">
        <Container fluid className="about section-content">
            <Row>
                <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center">
                  <div className="section-heading">
                    Projects
                    <hr />
                  </div>    
                </Col>
                <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center section-img">
                 <GrPersonalComputer />
                </Col>
            </Row>
            <Row>
              <Col xs={12} className="d-flex align-items-end">
                  <Row>
                  {Projects.map(project => {
                      return (
                          <Col xs={12} sm={6} spacing={1}>
                            <ProjectCard {...project} />
                          </Col>
                      )
                  })}
                  <Col xs={12} sm={6} spacing={1}>
                  <Card style={{ width: '100%'}}>
                    <Card.Body>
                        <Card.Title><h4>More projects</h4></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><a href='https://github.com/ameybhavsar24/' target='_blank'>See more on Github</a></Card.Subtitle>
                    </Card.Body>
                  </Card>
                  </Col>
                  </Row>
              </Col>
            </Row>
        </Container>
        </a>
    )
}

const ProjectCard = (props) => {
    const {title, subtitle, text, href } = props;
    return (
        <Card style={{ width: '100%'}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                <Card.Text>
                {text}
                </Card.Text>
                { href.live && <Button tag='a' target='blank' href={href.live }variant="primary">Live</Button>}
                {' '}
                { href.code && <Button tag='a'  target='blank' href={href.code }variant="primary">Code on github</Button> }
            </Card.Body>
        </Card>
    )
}