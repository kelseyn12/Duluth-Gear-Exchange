import React from 'react'
import { Link } from 'gatsby'
const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/sellYourGear'>Sell Your Gear</Link>
            </li>
            <li>
                <Link to='/repairs'>Repairs</Link>
            </li>
            <li>
                <Link to='/ourStaff'>Our Staff</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar