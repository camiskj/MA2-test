import Heading from "../layout/Heading";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {
  return (
    <>
      <Heading content="Contact" />
      <Container>
        <Row>
          <Col sm={4}>
            <p>
              Adress the way 55<br/>
              0022 Addresstown
            </p>
          </Col>
          <Col sm={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Your message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="dark" type="submit">
                  Send message
                </Button>
              </Form>
            </Col>
        </Row>
      </Container>
    </>
  );
 }