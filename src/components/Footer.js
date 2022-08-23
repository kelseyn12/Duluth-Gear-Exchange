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
<div className='footerLinks'>
<Link className='navBarLinkTop' style={{textDecoration: 'none', color: '#5EC8E5'}} to='/ourStaff'>Our Staff</Link>
<Link className='navBarLinkTop' style={{textDecoration: 'none', color: '#5EC8E5'}} to='/repairs'>Repairs</Link><br />
<Link className='navBarLinkBottom' style={{textDecoration: 'none', color: '#5EC8E5'}} to='/sellYourGear'>Sell Gear</Link>
<Link className='navBarLinkBottom' style={{textDecoration: 'none', color: '#5EC8E5'}} to='/contact'>Contact</Link>
</div>

<div className="footerMap">
    <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.488688785247!2d-92.09797224906458!3d46.794678779036836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ae5385203a5995%3A0xf62e37ca7dfda8a3!2sGreat%20Lakes%20Gear%20Exchange!5e0!3m2!1sen!2sus!4v1658770129214!5m2!1sen!2sus" width="300" height="250" style= {{ padding: 0, margin: 0, borderTop: '1px solid #808080', border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    </footer>
  )
}

export default Footer