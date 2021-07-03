import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from 'react-bootstrap';
import './Contact.scss';
import { MdMessage } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import { SiGmail, SiTwitter } from 'react-icons/si';
import { useForm } from '@formspree/react';
import { useState } from 'react';

export default function Contact() {
  return (
    // eslint-disable-next-line
    <a name="contact">
      <Container fluid className="contact section-content">
        <Row>
          <Col
            xs={12}
            sm={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="section-heading">
              Contact
              <hr />
            </div>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="d-flex align-items-center justify-content-center section-img"
          >
            <MdMessage />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-flex align-items-end">
            <div className="contact__text">
              <a
                href="https://github.com/ameybhavsar24/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:iamamey24+portfolio@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail />
              </a>
              <a
                href="https://www.linkedin.com/in/b-amey/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/ameybhavsar24"
                target="_blank"
                rel="noreferrer"
              >
                <SiTwitter />
              </a>
              <a href="https://t.me/heyamey" target="_blank" rel="noreferrer">
                <FaTelegram />
              </a>
            </div>
          </Col>
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Col xs={12} sm={6} style={{ padding: '0 5rem' }}>
            <ContactForm />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <hr style={{ maxWidth: '10rem', margin: '0 auto' }} />
          </Col>
        </Row>
      </Container>
    </a>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm('mlealdwe');
  const onSubmit = (e) => {
    setSubmitted(true);
    handleSubmit(e);
  };
  // triggers a re-render of component
  const [submitted, setSubmitted] = useState(state.succeeded || false);
  if (submitted) {
    return (
      <Row style={{ minHeight: '30vh' }}>
        <Col xs={12}>
          <Alert variant="dark">
            <p>
              Thank you for reaching out! I'll get in touch with you soon :)
            </p>
            <Button
              type="button"
              size="sm"
              variant="dark"
              onClick={() => setSubmitted(false)}
            >
              Send another message?
            </Button>
          </Alert>
        </Col>
      </Row>
    );
  }
  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Form.Group as={Col} xs={12} controlId="contactEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} xs={12} controlId="contactMessage">
          <Form.Label>Your message</Form.Label>
          <Form.Control as="textarea" rows="3" name="message" required />
        </Form.Group>
      </Row>
      <Row></Row>
      <Row>
        <Col xs={12}>
          <Button variant="primary" type="submit" disabled={state.submitting}>
            {state.submitting ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              ''
            )}
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
