import React from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"

const ContactForm = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lr={6}>
            <Form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required type="text" placeholder="Jane" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required type="text" placeholder="Doe" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@name.com"
                />
              </Form.Group>
              <Form.Group controlId="formBasicTextBox">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows="3"
                  placeholder="I love Duluth Gear Exchange!"
                />
              </Form.Group>
              <Button type="submit">Send</Button>
            </Form>
          </Col>
          <Col lr={6}>
            Have questions? Shoot us a message and we will get back to you!
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactForm
