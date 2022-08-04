import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

const Carasol = () => {
  const data = useStaticQuery(graphql`
  query
  {
    contentfulCarousel(title: {eq: "repairs"}) {
      Images {
        id
        gatsbyImageData
        description
      }
    }
  }
  `)
  return (
    
    <>
    <h2>Add a Carousel to put the images in!</h2>
    
    {data.contentfulCarousel.Images.map( (node, index) => {
      console.log(node)
      return (
      <div key={index}>
      <GatsbyImage
     image={ node.gatsbyImageData } 
     alt={ node.description}
      />
       
      </div>
      )
      })}
   
    </>
  )
}


export default Carasol