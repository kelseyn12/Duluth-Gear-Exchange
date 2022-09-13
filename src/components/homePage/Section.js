import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

const Section = () => {

  const data = useStaticQuery(graphql`
  {
    contentfulConsignmentSeason {
      season
    }
  }
`)
const season = data.contentfulConsignmentSeason;
  return (
    <>
    <h6 className='storeInfo'>
    510 E 4TH STREET DULUTH MN <br />
    TUES - FRI: 11AM - 6PM <br />
    SAT - SUN: 10AM - 5PM <br /> <br />
    GLGECOUNTER@GMAIL.COM <br />
    218-481-7270
    </h6>

    <h2 className='nowAcceptingText'>
    NOW ACCEPTING &nbsp;<Link style={{ color: '#FF5745'}} to='/sellYourGear'>  {
   <div>
   {season.season}
   </div>
  } 
  </Link> &nbsp;CONSIGNMENT 
    </h2>
    </>
  )
}

export default Section