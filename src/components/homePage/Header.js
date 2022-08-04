import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

const Header = () => {
  const data = useStaticQuery(graphql`
  query
  {
    contentfulCarousel(title: {eq: "homepage"}) {
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
    <h1>Buy Gear. Sell Gear.</h1>
    <h2>Insert Automatic Carousel for banner images</h2>

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

export default Header