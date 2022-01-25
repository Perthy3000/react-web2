import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function Contact() {
  return (
    <section className="p-5">
      <Container>
        <Row className="g-4">
          <Col md={true}>
            <h2 className="text-center mb-4">Contact Info</h2>
            <ListGroup variant="flush" className="lead">
              <ListGroup.Item>
                <span className="fw-bold">Location:</span> 123 Houston street
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">Phone Number:</span> +99 123456
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">Email:</span> helloworld@email.com
              </ListGroup.Item>
              <ListGroup.Item>
                <span className="fw-bold">Favorite Food:</span> Curry
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={true} className="text-center">
            <iframe
              title="discord"
              src="https://discord.com/widget?id=494376688256548865&theme=dark"
              width="80%"
              height="100%"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
