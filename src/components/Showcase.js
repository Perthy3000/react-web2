import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const initialFormState = {
  email: "",
  password: "",
};

function Showcase() {
  const [show, setShow] = useState(false);
  const [formInput, setFormInput] = useState(initialFormState);
  const [validated, setValidated] = useState(false)

  const handleFormChange = (e) => {
    setFormInput({ ...formInput, [e.target.id]: e.target.value });
  };
  const handleOpen = () => {
    setShow(true);
    setValidated(false)
  };
  const handleClose = () => {
    setShow(false);
    setValidated(false)
    setFormInput(initialFormState);
  };
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.currentTarget;

    if(form.checkValidity()) {
      setShow(false)
      setValidated(false)
      console.log(formInput);
    } else {
      e.stopPropagation()
      setValidated(true)
    }
  };

  return (
    <>
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
              <Button variant="primary" size="lg" onClick={handleOpen}>
                Start the Enrollment
              </Button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              alt=""
              src="img/showcase.svg"
            />
          </div>
        </Container>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Fill out this form!</p>
          <Form id='sub-form' validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                id="email"
                required
                onChange={handleFormChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                id="password"
                required
                onChange={handleFormChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" form="sub-form" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Showcase;
