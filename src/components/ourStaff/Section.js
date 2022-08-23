
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

const Section = () => {
  

  const data = useStaticQuery(graphql`
  query
  {
    allContentfulStaff {
      edges {
        node {
          staffBio {
            staffBio
          }
          staffImages {
            id
            gatsbyImageData
            description
          }
          staffOneLine
        }
      }
    }
  }

  `)

  return (
    <>
    <h1>Our Rockin' Staff</h1>
    {data.allContentfulStaff.edges.map (( item, i ) => {
      
      return (
        <div key={i} >

        <GatsbyImage
        className='staffPhoto'
        image={ item.node.staffImages[0].gatsbyImageData }
        alt={ 'staff image' } />

      { item.node.staffOneLine }
  
    </div>
      )
    })}
    
    </>
  )
}

export default Section