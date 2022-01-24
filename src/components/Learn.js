import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Learn() {
  return (
    <>
      <section id="learn" className="p-5">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md={true}>
              <Image src="img/fundamentals.svg" fluid={true} />
            </Col>
            <Col md={true} className="p-5">
              <h2>Learn the fundamentals</h2>
              <p className="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati accusantium accusamus, a ipsa similique ullam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                vel, veritatis, corporis ipsam, non quam in minima ea iure eaque
                distinctio perferendis amet culpa dignissimos voluptas sed porro
                dolorum doloremque.
              </p>
              <Button className="mt-3" variant="light">
                <i className="bi bi-chevron-right"></i> Read More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="p-5 bg-dark text-light">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md={true}>
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati accusantium accusamus, a ipsa similique ullam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                vel, veritatis, corporis ipsam, non quam in minima ea iure eaque
                distinctio perferendis amet culpa dignissimos voluptas sed porro
                dolorum doloremque.
              </p>
              <Button className="mt-3" variant="light">
                <i className="bi bi-chevron-right"></i> Read More
              </Button>
            </Col>
            <Col md={true} className="p-5">
              <Image src="img/react.svg" fluid={true} />
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}

export default Learn;
