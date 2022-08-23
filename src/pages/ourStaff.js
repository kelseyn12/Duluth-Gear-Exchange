import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/ourStaff/Section'
import StaffCard from '../components/ourStaff/StaffCard'
import '../styles/ourStaff.css'
const ourStaff = () => {
  return (
    <Layout>
        <Section />
        <StaffCard />
    </Layout>
  )
}

export default ourStaff