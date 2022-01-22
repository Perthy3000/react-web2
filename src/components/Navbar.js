import React from 'react';
import {default as NavbarBs} from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

function Navbar() {
  return(
    <NavbarBs bg='dark' expand='lg' variant='dark'>
      <Container>
        <NavbarBs.Brand href='#home'>Frontend Bootstrap</NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBs.Collapse>
          <Nav className='ms-auto'>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#questions">Questions</Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
