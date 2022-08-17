import React from 'react'
import Navigation from './Navbar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({children}) => {
  return (
    <>
       <Navigation />
       {children}
       <Footer />
    </>
  )
}

export default Layout