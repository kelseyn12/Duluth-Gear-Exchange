import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Section = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLookingForNotAccepting {
        edges {
          node {
            lookingFor {
              gatsbyImageData
              description
            }
            lookingForTwo {
              gatsbyImageData
              description
            }
            notAccepting {
              gatsbyImageData
              description
            }
            generalReminders {
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
      {data.allContentfulLookingForNotAccepting.edges.map(({ node, index }) => {
        return (
          <div
            className="lookingForNotAccepting"
            key={index}
            style={{ display: "flex", gap: "10px" }}
          >
            {node.lookingFor?.gatsbyImageData ? (
              <GatsbyImage
                className="lookingFor"
                image={node.lookingFor.gatsbyImageData}
                alt={node.lookingFor.description || "Looking For"}
              />
            ) : null}
            {node.lookingForTwo?.gatsbyImageData ? (
              <GatsbyImage
                className="lookingForTwo"
                image={node.lookingForTwo.gatsbyImageData}
                alt={node.lookingForTwo.description || "Looking For Two"}
              />
            ) : null}
            {node.notAccepting?.gatsbyImageData ? (
              <GatsbyImage
                className="notAccepting"
                image={node.notAccepting.gatsbyImageData}
                alt={node.notAccepting.description || "Not Accepting"}
              />
            ) : null}
            {node.generalReminders?.gatsbyImageData ? (
              <GatsbyImage
                className="generalReminders"
                image={node.generalReminders.gatsbyImageData}
                alt={node.generalReminders.description || "General Reminders"}
              />
            ) : null}
          </div>
        );
      })} 
    </>
  )
}

export default Section
