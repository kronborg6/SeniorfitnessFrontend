import './index.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import useToken from '../Hooks/useToken.js'



function Header() {
  const { token, setToken } = useToken();

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <Navbar className='navbar navbar-expand-sm fixed-top navbar-dark bg-dark'>
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
            {!token ? "" : <Nav.Link  className='text-white' href="/dashboard">Dashboard</Nav.Link>}
          </Nav>
          <Form className="d-flex">
          {token ? <button onClick={handleLogout} className='mt-2 btn btn-lg btn-outline-light' role="button" >
                Sign Out
            </button > : <a className='mt-2 btn btn-lg btn-outline-light' href="/login">Login</a>}          
          </Form>
    </Container>
  </Navbar>
    
  );
}

export default Header;
