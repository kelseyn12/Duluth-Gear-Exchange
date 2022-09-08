import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from "react-bootstrap/Carousel"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulCarousel(title: { eq: "homepage" }) {
        Images {
          id
          gatsbyImageData
          description
        }
      }
      contentfulAnnouncementBanner {
        bannerMessage
        display
      }
    }
  `)
  const announcementBanner = data.contentfulAnnouncementBanner;
  return (
    <>
    
   {
   announcementBanner.display  && (
   <div className="announcementBanner">
   <h4>{announcementBanner.bannerMessage}</h4>
   </div>
  )}
      <h1 className="callToAction">Buy Gear. Sell Gear.</h1>
      <Carousel controls={false} indicators={false} pause={false}>
        {data.contentfulCarousel.Images.map((node, index) => {
          return (
            <Carousel.Item key={index}>
              <GatsbyImage
                className="d-block w-100 bannerImage"
                image={node.gatsbyImageData}
                alt={node.description}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
      
    </>
  )
}

export default Header
