import React from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import Map from "./Map"

const ContactForm = () => {
  return (
    <>
      <Container className="form" >
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
                    <Form.Label style={{color:'#042F4A'}}>FIRST NAME</Form.Label>
                    <Form.Control required type="text" placeholder="JANE" name="first-name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBasicLastName">
                    <Form.Label style={{ color:'#042F4A'}}>LAST NAME</Form.Label>
                    <Form.Control required type="text" placeholder="DOE" name="last-name" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color:'#042F4A'}}>EMAIL ADDRESS</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="NAME@NAME.COM"
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicTextBox">
                <Form.Label style={{color:'#042F4A'}}>MESSAGE</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows="3"
                  placeholder="I LOVE DULUTH GEAR EXCHANGE!"
                  name="info"
                />
              </Form.Group>
              <Button variant="custom" type="submit" style={{ margin: 10 }}>SEND</Button>
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
