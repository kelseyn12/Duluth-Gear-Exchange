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
            answer {
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
      {data.allContentfulQuestionAnswer.edges.map(( {node, index} ) => {
        console.log(node.answer.childrenMarkdownRemark)
      
        return(
        <div key={node.question} className="repairCost">
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
        //another way I could use an "accordion"
        // <details>
        //   <summary>{node.question}</summary>
        //   <p
        //           dangerouslySetInnerHTML={{
        //             __html: node.answer.childrenMarkdownRemark.html
        //           }}
        //         />
        // </details>
        )
})}
    </>
  )
}

export default FrequentQuestions
