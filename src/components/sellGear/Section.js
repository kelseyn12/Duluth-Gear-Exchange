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
      <h1 className="actionStatement">DUST OFF OLD GEAR | GIVE IT NEW LIFE</h1>
      {data.allContentfulLookingForNotAccepting.edges.map( ( {node, index} ) => {
        return (
          <div className="lookingForNotAccepting" key={index}>
         
        <GatsbyImage
        className="lookingFor"
     image={ node.lookingFor.gatsbyImageData } 
     alt={ node.description}
     key={index}
      />
      <GatsbyImage
      className="notAccepting"
     image={ node.notAccepting.gatsbyImageData } 
     alt={ node.description}
     key={index}
      />
        </div>
        )})
        }
      
    </>
  )
}

export default Section
