import './Navigation.scss'
import { Fragment, useState, useEffect, useRef } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
export default function Navigation() {
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
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
        <Fragment>
            <Navbar expand="lg" fixed="top" style={{ transition: '.3s ease', backgroundColor: navBackground ? '#fdfdfd' : '#fcfcfc', borderColor: navBackground ? 'rgba(0,0,0,0.05)' : 'transparent' }}>
                <Container fluid>
                    <Navbar.Brand href="/" className="noselect">
                        AmeyBhavsar
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">

                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto noselect">
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
        </Fragment>
    )
}
