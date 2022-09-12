import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import Carousel from 'react-bootstrap/Carousel';

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
    <Carousel className='repairCarousel' indicators={false}>
    {data.contentfulCarousel.Images.map( (node, index) => {
      return (
        <Carousel.Item>
      <GatsbyImage
      key={index}
      className="d-block w-100 repairImages"
     image={ node.gatsbyImageData } 
     alt={ node.description}
      />
       </Carousel.Item>
      )
      })}
   </Carousel>
    </>
  )
}


export default Carasol