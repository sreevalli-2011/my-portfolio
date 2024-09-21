import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Make sure to import these from react-bootstrap

const NavBar = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top">
      
      <Container>
        {/* Branding */}
        <Navbar.Brand as={Link} to="/">SK</Navbar.Brand>

        {/* Toggler button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navigation items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
          <Nav.Item className="mx-3"> {/* Add margin to each item */}
              <Link className="nav-link" to="/about">About</Link>
            </Nav.Item>
            <Nav.Item className="mx-3">
              <Link className="nav-link" to="/resume">Resume</Link>
            </Nav.Item>
            <Nav.Item className="mx-3">
              <Link className="nav-link" to="/projects">Projects</Link>
            </Nav.Item>

            <Nav.Item className="mx-3">
              <Link className="nav-link" to="/photoshopworks">PhotoshopWorks</Link>
            </Nav.Item>

            <Nav.Item className="mx-3">
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;




