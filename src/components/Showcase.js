import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Showcase() {
  return (
    <section className="bg-dark p-5 text-light text-center text-sm-start">
      <Container>
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Become <span className="text-warning">Frontend</span> Developer
            </h1>
            <p className="lead my-4">
              Once upon a time there was a Backend Developer applying for
              internship for Backend role in a certain company but instead he
              was assigned a Frontend role
            </p>
            <Button variant="primary" size='lg'>Start the Enrollment</Button>
          </div>
          <img className="img-fluid w-50 d-none d-sm-block" alt="" src="img/showcase.svg" />
        </div>
      </Container>
    </section>
  );
}

export default Showcase;
