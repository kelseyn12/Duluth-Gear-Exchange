import React from 'react'
import { Link } from 'gatsby'

const Section = () => {
  return (
    <>
    <h3>
    510 E 4th Street Duluth MN <br />
    Tues - Fri: 11am - 6pm <br />
    Sat - Sun: 10am - 5pm <br />
    GLGEcounter@gmail.com <br />
    218-481-7270
    </h3>

    <h2>
    Now Accepting <Link to='/sellYourGear'>Spring/Summer</Link> Consignment 
    </h2>
    </>
  )
}

export default Section