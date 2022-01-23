import React from "react";
import { Button, FormControl, InputGroup, Container } from "react-bootstrap";
import './Newsletter.css'

function Newsletter() {
  return (
    <section className="bg-primary text-light p-5">
      <Container>
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Sign Up for Newsletter</h3>
          <InputGroup className="news-input">
            <FormControl
              placeholder="Enter Email"
            />
            <Button variant="dark" size="lg" id="button-addon2">
              Submit
            </Button>
          </InputGroup>
        </div>
      </Container>
    </section>
  );
}

export default Newsletter;
