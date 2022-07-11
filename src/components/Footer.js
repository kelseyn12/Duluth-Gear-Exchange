import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
<div>    
HOURS:<br />
Tues - Fri: 11am - 6pm <br />
Sat - Sun: 10am - 5pm
</div>  
<div>
PHONE: 218-481-7270<br />
EMAIL: greatlakesgearexchange@gmail.com <br />
INSTAGRAM: @greatlakesgearexchange
</div>
<div>
Explore<br />
<Link to='/ourStaff'>Our Staff</Link>
<Link to='/repairs'>Repairs</Link>
<Link to='/sellYourGear'>Sell Gear</Link>
<Link to='/contact'>Contact</Link>
</div>

    </footer>
  )
}

export default Footer