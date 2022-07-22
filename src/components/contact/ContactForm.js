import React from 'react'
import { Form, Button } from "react-bootstrap"

const ContactForm = () => {
  return (
   <>
   
   <Form 
   name="contact" 
   method="post" 
   data-netlify="true"
   data-netlify-honeypot="bot-field"
   >
    <Form.Group controlId="formBasicFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Jane" />
    </Form.Group>
    <Form.Group controlId="formBasicLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Doe" />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="email" placeholder="name@name.com" />
    </Form.Group>
    <Form.Group controlId="formBasicTextBox">
      <Form.Label>Message</Form.Label>
      <Form.Control 
      as="textarea"
      rows="3"
      placeholder="I love Duluth Gear Exchange!" />
    </Form.Group>
    <Button type="submit">Send</Button>
   </Form>
   </>
  )
}

export default ContactForm