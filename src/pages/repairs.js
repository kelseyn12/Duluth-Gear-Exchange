import React from 'react'
import Layout from '../components/Layout'
import Carasol from '../components/repairs/Carasol'
import Section from '../components/repairs/Section'
import '../styles/repairs.css'
const repairs = (props) => {
  return (
    <Layout>
      <Section />
      <Carasol />
    </Layout>
  )
}

export default repairs