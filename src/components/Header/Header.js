import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="py-4 position-sticky top-0 header"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo text-white">
            GET ME HEALTHY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto link-container">
              <Nav.Link className='text-white' as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className='text-white' as={Link} to="/">
                Services
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;