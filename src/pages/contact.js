import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import Map from '../components/contact/Map'
import Layout from '../components/Layout'
const contact = () => {
  return (
    <Layout>
        <ContactForm />
        <Map />
    </Layout>
  )
}

export default contact