import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from '../../images/course.png'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    const activeStyle = {
        color: 'skyblue'
    }
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
                    className="d-inline-block align-center ms-5"
                    />
                    <span style={{color:'skyblue'}}>Education</span>
                 </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto me-5">
                    <NavLink activeStyle={activeStyle} className="nav-link" to="/home">Home</NavLink>
                    <NavLink activeStyle={activeStyle} className="nav-link" to="/about">About</NavLink>
                    <NavLink activeStyle={activeStyle} className="nav-link" to="/service">Service</NavLink>
                    <NavLink activeStyle={activeStyle} className="nav-link" to="/contact">Contact</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default NavBar;