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
              childMarkdownRemark {
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
      <h2 className="frequentQuestions">FREQUENTLY ASKED QUESTIONS</h2>
      {data.allContentfulQuestionAnswer.edges.map(( {node, index} ) => {
       
      
        return(
        <div key={node.question} className="frequentQuestionAccordion">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p alt={node.question}>{node.question}</p>
              </Accordion.Header>
              <Accordion.Body>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.answer.childMarkdownRemark.html
                  }}
                  alt={node.answer}
                 
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
