import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import "../font.css"

export default function header() {
  return (
    <div>
        <Navbar bg="light" expand="lg" style={{paddingLeft:"0px"}} >
            <Container>
                <Navbar.Brand href="#home" className="font-tomorrow" ><img
          alt=""
          src="/rsLogo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}RShifts</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            
            </Container>
        </Navbar>
    </div>
  )
}
