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
      style={{ width: "200px", height: "200px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <GatsbyImage
        image={item.node.localImage.childImageSharp.gatsbyImageData}
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
                gatsbyImageData(width: 200, height: 200)
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
        style={{ maxWidth: `900px`, marginBottom: `15.45rem`, display: "flex" }}
      >
        {arrayOfInstaImages.map((item, i) => {
          return <PostDisplay item={item} key={i} />
        })}
      </div>
    </>
  )
}

export default Instagram
