import React from 'react'
import { Link } from 'gatsby'

const Section = () => {
  return (
    <>
    <h6 className='storeInfo'>
    510 E 4th Street Duluth MN <br />
    Tues - Fri: 11am - 6pm <br />
    Sat - Sun: 10am - 5pm <br /> <br />
    GLGEcounter@gmail.com <br />
    218-481-7270
    </h6>

    <h2 className='nowAcceptingText'>
    Now Accepting &nbsp;<Link style={{ color: '#FF5745'}} to='/sellYourGear'> Spring/Summer </Link> &nbsp;Consignment 
    </h2>
    </>
  )
}

export default Section