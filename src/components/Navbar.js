import React from "react"
import { Nav, Navbar, Container } from 'react-bootstrap';


const Navigation = () => {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href='/'>
      <img src={'../../Logo.png'} className='logo' alt='Duluth Gear Exchange logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Container>
    <Nav className="nav" >
    
      <Nav.Item>
      <Nav.Link style={{textDecoration: 'none', color: '#042F4A'}} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link style={{textDecoration: 'none', color: '#042F4A'}} to="/sellYourGear">Sell Your Gear</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link style={{textDecoration: 'none', color: '#042F4A'}} to="/repairs">Repairs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link style={{textDecoration: 'none', color: '#042F4A'}} to="/ourStaff">Our Staff</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link style={{textDecoration: 'none', color: '#042F4A'}} to="/contact">Contact</Nav.Link>
      </Nav.Item>
      
    </Nav>
    </Container>
    </Navbar.Collapse>
    </Navbar>
    
    <hr className="homepageLine" />
    </>
  )
}

export default Navigation;
