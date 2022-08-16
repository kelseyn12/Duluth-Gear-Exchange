import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
<div className='footerHours'>    
HOURS:<br />
Tues - Fri: 11am - 6pm <br />
Sat - Sun: 10am - 5pm
</div>  
<div className='footerInfo'>
PHONE: 218-481-7270<br />
EMAIL: greatlakesgearexchange@gmail.com <br />
INSTAGRAM: @greatlakesgearexchange
</div>
<div>
<Link className='navBarLinkTop' style={{textDecoration: 'none', color: '#5EC8E5'}} to='/ourStaff'>Our Staff</Link>
<Link className='navBarLinkTop' style={{textDecoration: 'none', color: '#5EC8E5'}} to='/repairs'>Repairs</Link><br /><br />
<Link className='navBarLinkBottom' style={{textDecoration: 'none', color: '#5EC8E5'}} to='/sellYourGear'>Sell Gear</Link>
<Link className='navBarLinkBottom' style={{textDecoration: 'none', color: '#5EC8E5'}} to='/contact'>Contact</Link>
</div>

    </footer>
  )
}

export default Footer