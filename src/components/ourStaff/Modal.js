// import { GatsbyImage } from 'gatsby-plugin-image'
import React, {useState} from 'react'


import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const StaffCard = ({bio, name, image}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <>
    <Button variant="link" onClick={handleShow}>
      and...
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        {/* <GatsbyImage {image} /> */}
        <Modal.Body> {bio}
        </Modal.Body>
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