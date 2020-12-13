import './Navigation.css'
import { useState, useEffect, useRef } from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap'
export default function Navigation() {
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 20
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div>
            <Navbar expand="lg" fixed="top" style={{ transition: '.3s ease', borderColor: navBackground ? 'rgba(0,0,0,0.05)' : 'transparent' }}>
                <Container fluid>
                    <Navbar.Brand href="/">
                        AmeyBhavsar
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">

                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
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
