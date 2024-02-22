import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Accordion from "react-bootstrap/Accordion"

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
      <h2 className="repairType">FIX ZIPPERS | PATCH TENTS</h2>
      <br />
      <h6>
        • ZIPPER REPAIRS ON JACKETS, SLEEPING BAGS, TENTS, AND SOFT-SIDED PACKS
        •
      </h6>
      <h6>• SEWING PATCHES ON TENTS •</h6>

      <h3>COST ESTIMATES</h3>
      {data.allContentfulCostEstimates.edges.map(({ node, index }) => {
        return (
          <div key={index} className="repairCost">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{node.repair}</Accordion.Header>
                <Accordion.Body>{node.cost}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        )
      })}
      {/* <h6 className="turnAroundTime">• TURN-AROUND TIME: 2-3 WEEKS •</h6> */}
      <h6 className="questions">
        <br /> QUESTIONS? <br />
        EMAIL:{" "}
        <a className="repairEmailNum" href="mailto:ZIPPERFIXERDULUTH@gmail.com">
          ZIPPERFIXERDULUTH@GMAIL.COM
        </a>{" "}
        {/* <br />
        CALL:{" "}
        <a className="repairEmailNum" href="tel:+12184817270">
          218-481-7270
        </a> */}
      </h6>
    </>
  )
}

export default Section
