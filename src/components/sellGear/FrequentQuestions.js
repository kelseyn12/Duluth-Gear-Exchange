import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Accordion from "react-bootstrap/Accordion"

const FrequentQuestions = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulQuestionAnswer {
        edges {
          node {
            question
            id
            answer {
              answer
              childrenMarkdownRemark {
                html
                id
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      {data.allContentfulQuestionAnswer.edges.map(({ node, index }) => (
        <div className="repairCost">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p>{node.question}</p>
              </Accordion.Header>
              <Accordion.Body>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.answer.childrenMarkdownRemark.html
                  }}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </>
  )
}

export default FrequentQuestions
