import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Boxes() {
  return (
    <section className="p-5">
      <Container>
        <Row className="text-center g-4">
          <Col md={true}>
            <Card bg="dark" text="light">
              <Card.Body className="text-center">
                <h1 className="mb-3">
                  <i className="bi bi-laptop"></i>
                </h1>
                <Card.Title className="mb-3">Virtual</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  error totam, eos possimus quia id.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={true}>
            <Card bg="secondary" text="light">
              <Card.Body className="text-center">
                <h1 className="mb-3">
                  <i className="bi bi-person-square"></i>
                </h1>
                <Card.Title className="mb-3">Hybrid</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  error totam, eos possimus quia id.
                </Card.Text>
                <Button variant="dark">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={true}>
            <Card bg="dark" text="light">
              <Card.Body className="text-center">
                <h1 className="mb-3">
                  <i className="bi bi-people"></i>
                </h1>
                <Card.Title className="mb-3">In Person</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  error totam, eos possimus quia id.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Boxes;
