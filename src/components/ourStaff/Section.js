import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Modal from "./Modal"

const Section = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulStaff {
        edges {
          node {
            title
            staffBio {
              staffBio
            }
            staffImages {
              id
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
      <h1>OUR ROCKIN' STAFF</h1>
      <div className="staffContainer">
        {data.allContentfulStaff.edges.map((item, i) => {
          return (
            <div className="staffImages" key={i}>
              <GatsbyImage
                className="staffPhoto"
                image={item.node.staffImages[0].gatsbyImageData}
                alt={"staff image"}
              />
              <Modal
                bio={item.node.staffBio.staffBio}
                name={item.node.title}
                image={item.node.staffImages[0].gatsbyImageData}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Section
