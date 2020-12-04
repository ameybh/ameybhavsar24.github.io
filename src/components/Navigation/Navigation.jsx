import './Navigation.css'
import { Container, Navbar, Nav, Row } from 'react-bootstrap';
export default function Navigation() {
    return (
        <div>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        AmeyBhavsar
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">

                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link>
                                About
                        </Nav.Link>
                            <Nav.Link>
                                Work
                        </Nav.Link>
                            <Nav.Link>
                                Resume
                        </Nav.Link>
                            <Nav.Link>
                                Contact
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}