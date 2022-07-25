import React from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import Map from "./Map"

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
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required type="text" placeholder="Jane" name="first-name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required type="text" placeholder="Doe" name="last-name" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@name.com"
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicTextBox">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows="3"
                  placeholder="I love Duluth Gear Exchange!"
                  name="info"
                />
              </Form.Group>
              <Button type="submit">Send</Button>
            </Form>
          </Col>
          <Col lr={6}>
            {/* Have questions? Shoot us a message and we will get back to you! */}
            <Map />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactForm
