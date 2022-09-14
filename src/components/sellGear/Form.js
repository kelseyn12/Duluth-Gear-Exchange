import React from "react"

const Form = () => {
  return (
    <>
      <h2 className="pdfForm">
        SAVE TIME! FILL OUT THIS
        <a
          href={`static/DGE.pdf`}
          target="_blank"
          rel="noreferrer"
          id="consignmentPdf"
        >
          {" "}
          CONSIGNMENT FORM
        </a>{" "}
        AT HOME!
      </h2>
    </>
  )
}

export default Form
