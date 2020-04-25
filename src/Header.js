/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <a href="#">
          <img
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG.png"
            style={{ width: 70, height: 45, marginTop: -6 }}
          />
        </a>{ " " }
        </Navbar.Brand>
        <Navbar.Brand style={{fontFamily:"Lucida Console, Monaco, monospace",fontWeight:20,fontSize:30}}>
        Meme Generator
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
