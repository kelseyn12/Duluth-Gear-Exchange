import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const StaffCard = ({ bio, name, image }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button className="btn-modal" variant="link" onClick={handleShow}>
        {name}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{bio} </p>
          <GatsbyImage className="modalImg" image={image} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default StaffCard
