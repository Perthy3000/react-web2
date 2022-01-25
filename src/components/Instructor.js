import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InstructorCard from "./InstructorCard";

const instructors = [
  {
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "John Doe",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex consectetur molestiae natus repellat? Qui?",
    twitter: "#",
    fb: "#",
    linkedin: "#",
    ig: "#",
  },
  {
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "John Cena",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex consectetur molestiae natus repellat? Qui?",
    twitter: "#",
    fb: "#",
    linkedin: "#",
    ig: "#",
  },
  {
    img: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "John Lennon",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex consectetur molestiae natus repellat? Qui?",
    twitter: "#",
    fb: "#",
    linkedin: "#",
    ig: "#",
  },
  {
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "John Wick",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex consectetur molestiae natus repellat? Qui?",
    twitter: "#",
    fb: "#",
    linkedin: "#",
    ig: "#",
  },
];

function Instructor() {
  return (
    <section id="instructors" className="bg-primary p-5">
      <Container>
        <h2 className="text-center text-light">Our Instructors</h2>
        <p className="lead text-center text-light mb-5">
          Our instructors is now looking for experience in web development
          industry
        </p>
        <Row className="g-4">
          {instructors.map((el) => (
            <Col md={6} lg={3}>
              <InstructorCard instructor={el} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Instructor;
