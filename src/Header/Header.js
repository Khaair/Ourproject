import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

 function Header() {

    return (
        <>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Routing</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link ><NavLink to="/"> Litonvy</NavLink></Nav.Link>
      <Nav.Link><NavLink to="/newcom" >Newcom</NavLink></Nav.Link>  
    </Nav>
    
  </Navbar>
        </>
    )
}

export default Header;