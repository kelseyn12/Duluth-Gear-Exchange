import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <img
            src={"../../Logo.png"}
            className="logo"
            alt="Duluth Gear Exchange logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Container>
            <Nav className="nav">
              <Nav.Item>
                <Nav.Link style={{ color: "#042F4A" }} href="/">
                  HOME
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ color: "#042F4A" }} href="/sellYourGear">
                  SELL YOUR GEAR
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ color: "#042F4A" }} href="/repairs">
                  REPAIRS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ color: "#042F4A" }} href="/ourStaff">
                  OUR STAFF
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ color: "#042F4A" }} href="/contact">
                  CONTACT
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>

      <hr className="homepageLine" />
    </>
  )
}

export default Navigation
