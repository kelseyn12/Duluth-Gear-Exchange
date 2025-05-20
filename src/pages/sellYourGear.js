import React from "react"
import Layout from "../components/Layout"
import Form from "../components/sellGear/Form"
import FrequentQuestions from "../components/sellGear/FrequentQuestions"
import Section from "../components/sellGear/Section"
import "../styles/sellGear.css"

const sellYourGear = () => {
  return (
    <Layout>
      <Section />
      <Form />
      <FrequentQuestions />
    </Layout>
  )
}

export default sellYourGear
