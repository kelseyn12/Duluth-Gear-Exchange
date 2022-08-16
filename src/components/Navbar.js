import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <>
    <nav>
      <img src={'../../Logo.png'} className='logo' alt='Duluth Gear Exchange logo'/>

      <Link style={{textDecoration: 'none', color: '#042F4A'}} to="/">Home</Link>

      <Link style={{textDecoration: 'none', color: '#042F4A'}} to="/sellYourGear">Sell Your Gear</Link>

      <Link style={{textDecoration: 'none', color: '#042F4A'}} to="/repairs">Repairs</Link>

      <Link style={{textDecoration: 'none', color: '#042F4A'}} to="/ourStaff">Our Staff</Link>

      <Link style={{textDecoration: 'none', color: '#042F4A'}} to="/contact">Contact</Link>
      
    </nav>
    <hr className="homepageLine" />
    </>
  )
}

export default Navbar
