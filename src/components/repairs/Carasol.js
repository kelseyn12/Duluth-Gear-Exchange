import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Carasol = () => {
  const data = useStaticQuery(graphql`
  query
  {
    allContentfulCarousel {
      edges {
        node {
          Images {
            children {
              ... on ImageSharp {
                id
                gatsbyImageData(width: 200)
              }
            }
          }
        }
      }
    }
  }
  `)

  return (
    <>
    <h2>Put carasolimage content model with images of Nils repairs here</h2>
    </>
  )
}

export default Carasol