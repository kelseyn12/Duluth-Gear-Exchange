import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Accordion from 'react-bootstrap/Accordion';

const Section = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCostEstimates {
        edges {
          node {
            repair
            cost
          }
        }
      }
    }
  `)

  return (
    <>
      <h2>We fix zippers and we patch tents!</h2>
      <br />
      <h3>
        Zipper repairs on jackets, sleeping bags, tents, and soft-sided packs
        Sewing patches on tents
      </h3>

      <h3>Cost Estimates</h3>
      {data.allContentfulCostEstimates.edges.map( ( {node, index} ) => {
        return (
        <div key={index} className="repairCost">
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{ node.repair }</Accordion.Header>
        <Accordion.Body>
        { node.cost }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
      )
})}
      <h5>Turn-Around Time: 2-3 weeks unless communicated otherwise</h5>
      <h6>
        Questions? <br />
        Email: repairsbynils@gmail.com <br />
        Call: 218-481-7270
      </h6>
    </>
  )
}

export default Section
