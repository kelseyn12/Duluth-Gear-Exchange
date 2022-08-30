import React, {useState} from 'react'

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const StaffCard = ({bio, name}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Learn more about me!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {bio}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  
    
        
   
    </>
  )
}

export default StaffCard