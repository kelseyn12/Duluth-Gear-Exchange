import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import { GatsbyImage } from "gatsby-plugin-image"
import { useState } from "react"

const PostDisplay = ({ item }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} role='none'
    >
      <GatsbyImage
        image={item.node.localImage.childImageSharp.gatsbyImageData}
        key={item.node.id}
        alt={item.node.caption || "Instagram Post"}
        fluid={item.node.fluid}
      />
     

      {isHover && <p> {item.node.caption}</p>}
    </div>
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
                fluid(maxWidth: 200 ) {
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
      <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridColumnGap: '2px',
        gridRowGap: '2px',
        maxWidth: '700px',
        }}
        
      >
        {arrayOfInstaImages.map((item, i) => {
          return <PostDisplay item={item} key={i}  />
        })}
      </div>
    </>
  )
}

export default Instagram
