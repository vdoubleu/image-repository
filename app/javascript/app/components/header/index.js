import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header() {
  const signedIn = false;
  const signedInUserName = "";

  const signedInText = signedIn 
    ? (<Link to='/account' className="nav-link"> {`Signed in as ${signedInUserName}`} </Link>)
    : (<Link to='/login' className="nav-link"> {"Sign In/Create Account"} </Link>);

  return (
  <Navbar bg="dark" variant="dark">
    <Link to="/" className="navbar-brand">ImgRep</Link>
    <Nav className="">
      <Nav.Item>
        <Link to="/" className="nav-link">Your Images</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/upload" className="nav-link">Upload</Link>
      </Nav.Item>
    </Nav>
    {/*
    this is used for user login, if one were to add it
    <Nav className="ml-auto">
      <Nav.Item>
        {signedInText}
      </Nav.Item>
    </Nav>*/}
  </Navbar>

  );
}

export default Header;
