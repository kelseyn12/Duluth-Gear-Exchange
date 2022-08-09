import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

const Section = () => {
  const data = useStaticQuery(graphql`
  query
  {
    allContentfulLookingForNotAccepting {
      edges {
        node {
          lookingFor {
            gatsbyImageData
            description
          }
          notAccepting {
            gatsbyImageData
            description
          }
        }
      }
    }
  }
  `)

  return (
    <>
      <h1>Dust off your old gear. Give it new life.</h1>
      <h3>Looking For/Not Accepting Content Model</h3>
      {data.allContentfulLookingForNotAccepting.edges.map( ( {node, index} ) => {
        return (
          <div key={index} className="lookingForNotAccepting">
         
        <GatsbyImage
     image={ node.lookingFor.gatsbyImageData } 
     alt={ node.description}
      />
      <GatsbyImage
     image={ node.notAccepting.gatsbyImageData } 
     alt={ node.description}
      />
        </div>
        )})
        }
        
      
      <h2>
        Never consigned?
        <br />
        Have more than 20 items?
        <br />
        Have a large item, like a bike or boat?
        <br />
        Curious if we’ll accept it?
        <br />
        CALL US FIRST!
        <br />
        218-481-7270
      </h2>
    </>
  )
}

export default Section
