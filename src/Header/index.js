import './index.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Header() {
  return (
    <Navbar className='navbar navbar-expand-sm fixed-top navbar-light'>
    <Container className='nav__text'>
      <Navbar.Brand  className='text-white' href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Senior Fitness
      </Navbar.Brand>
      <Nav className="me-auto">
            <Nav.Link className='text-white' href="/">Home</Nav.Link>
            <Nav.Link  className='text-white' href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
         
          <a href='/Login' className='mt-2 btn btn-lg btn-outline-light' role="button">
                Login
            </a>          
          </Form>
    </Container>
  </Navbar>
    
  );
}

export default Header;
