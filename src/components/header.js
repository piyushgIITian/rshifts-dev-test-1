import React from 'react'
import { Navbar, Nav, Button} from "react-bootstrap"
import "../style.css"


export default function Header(props) {
  return (
    <div id="header-class">
        <Navbar bg="light" expand="lg"className="py-3"   >
            
                <Navbar.Brand href="/" className="font-tomorrow" style={{marginLeft:"101px", fontWeight:"bold"}}><img
          alt=""
          src="/rsLogo.svg"
          width="50"
          height="50"
          style={{marginRight: "5px"}}
          className="d-inline-block"
        />RShifts</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{marginRight:"101px"}}>
                <Nav>
                    <Nav.Link href="/" id="header-tabs" className="hover-underline-animation">HOME</Nav.Link>
                    <Nav.Link href="#aboutus" id="header-tabs" className="hover-underline-animation">ABOUT US</Nav.Link>
                    <Nav.Link href="#contactus" id="header-tabs" className="hover-underline-animation">CONTACT US</Nav.Link>
                    <Button onclick={()=>props.buttonFunc()} className="px-3" id="rs-button-1" type="submit">
                       {props.buttonText}
                    </Button>
                    
                </Nav>
                </Navbar.Collapse>
                 
           
        </Navbar>
    </div>
  )
}
