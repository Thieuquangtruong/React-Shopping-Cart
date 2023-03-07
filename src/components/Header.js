import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import {Link} from 'react-router-dom'



export default function Header({listCart}) {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>

        <Navbar.Brand>
          <span className="logo" style={{fontFamily:"cursive"}}>Novelty shop</span>
        </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
          
          <Nav.Link><Link to="/cart">Cart &nbsp;</Link>
            <Badge pill bg="success" ><span style={{fontSize: "15px"}}>{listCart.length}</span></Badge>
           
          </Nav.Link>
          <Nav.Link ><Link to="/admin">Admin</Link></Nav.Link>
        </Nav>
      </Container>

    </Navbar>
  );
}
