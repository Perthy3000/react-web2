import React from 'react';
import {default as NavbarBs} from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

function Navbar() {
  return(
    <NavbarBs bg='dark' expand='lg' variant='dark' className='py-3' sticky='top'>
      <Container>
        <NavbarBs.Brand href='#home'>Frontend Bootstrap</NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBs.Collapse>
          <Nav className='ms-auto'>
            <Nav.Link href="#learn">What You'll Learn</Nav.Link>
            <Nav.Link href="#questions">Questions</Nav.Link>
            <Nav.Link href="#instructors">Instructors</Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
