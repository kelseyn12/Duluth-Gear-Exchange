import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/ourStaff/Section'
import StaffCard from '../components/ourStaff/StaffCard'
const ourStaff = () => {
  return (
    <Layout>
       Make api request to contentful to get every staff
       Map over the array returned from api and for each object in array, create staffbio.js
        <Section />
        <StaffCard />
    </Layout>
  )
}

export default ourStaff