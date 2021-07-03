import "./Navigation.scss";
import { Fragment, useState, useEffect, useRef } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <Navbar
        expanded={expanded}
        expand="lg"
        fixed="top"
        style={{
          transition: ".3s ease",
          backgroundColor: navBackground ? "#fdfdfd" : "#fcfcfc",
          borderColor: navBackground ? "rgba(0,0,0,.1)" : "transparent",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="/" className="noselect">
            AmeyBhavsar
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            aria-controls="basic-navbar-nav"
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            onClick={() => setExpanded(false)}
          >
            <Nav className="ml-auto noselect">
              <Nav.Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
