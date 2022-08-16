import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import { GatsbyImage } from "gatsby-plugin-image"
import { useState } from "react"
import { Container } from "react-bootstrap"

const PostDisplay = ({ item }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  return (
    <Container fluid
     className="picContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="none"
    >
      <figure className="position-relative">
        <GatsbyImage
          image={item.node.localImage.childImageSharp.gatsbyImageData}
          key={item.node.id}
          alt={item.node.caption || "Instagram Post"}
          fluid={item.node.fluid}
          className="image"
          
        />
        <figcaption className="imgtext">
          {isHover && <p> {item.node.caption}</p>}
        </figcaption>
      </figure>
    </Container>
  )
}

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstagramContent(limit: 6) {
        edges {
          node {
            localImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            caption
          }
        }
      }
    }
  `)
  let arrayOfInstaImages = _get(data, "allInstagramContent.edges")
  return (
    <>
      <div className="image-grid-container">
        {arrayOfInstaImages.map((item, i) => {
          return <PostDisplay item={item} key={i} />
        })}
      </div>
    </>
  )
}

export default Instagram
