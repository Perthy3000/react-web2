import React from "react";
import Card from "react-bootstrap/Card";

function InstructorCard({instructor}) {
  return (
    <>
      <Card bg="light">
        <Card.Body className="text-center">
          <img className="rounded-circle mb-3" src={instructor.img} />
          <Card.Title className="mb-3">{instructor.name}</Card.Title>
          <Card.Text>
            {instructor.desc}
          </Card.Text>
          <a href={instructor.twitter}>
            <i className="bi bi-twitter text-dark mx-1"></i>
          </a>
          <a href={instructor.fb}>
            <i className="bi bi-facebook text-dark mx-1"></i>
          </a>
          <a href={instructor.linkedin}>
            <i className="bi bi-linkedin text-dark mx-1"></i>
          </a>
          <a href={instructor.ig}>
            <i className="bi bi-instagram text-dark mx-1"></i>
          </a>
        </Card.Body>
      </Card>
    </>
  );
}

export default InstructorCard;
