import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from '../../images/course.png'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                <Navbar.Brand className="fw-bold">
                  <img
                    alt=""
                    src={img}
                    width="110"
                    height="80"
                    className="d-inline-block align-center"
                    />
                    Education
                 </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/service">Service</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavBar;