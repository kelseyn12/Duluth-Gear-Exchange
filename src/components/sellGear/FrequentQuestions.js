import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


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
    {data.allContentfulQuestionAnswer.edges.map( ({ node, index }) => (
        <div className="repairCost">
        <p>{ node.question }</p>
        <p>{ node.answer.answer }</p>
        </div>
      ))}

    
    </>
  )
}

export default FrequentQuestions