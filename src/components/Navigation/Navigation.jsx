import './Navigation.css'
import { Container, Navbar, Nav } from 'react-bootstrap';
export default function Navigation() {
    return (
        <Navbar expand="sm">
            <Container fluid>
                <Navbar.Brand href="/">
                    AmeyBhavsar
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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

    )
}