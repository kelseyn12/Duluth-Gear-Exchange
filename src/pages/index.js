import React from "react"
import Header from "../components/homePage/Header"
import Instagram from "../components/homePage/Instagram"
import Section from "../components/homePage/Section"
import Layout from "../components/Layout"
import '../styles/homePage.css'
import '../styles/global.css'
import Newsletter from "../components/homePage/Newsletter"

export default function Home() {
  return (
  <Layout>
    
   <Header />
   <Section />
   <Instagram />
   <Newsletter />
  </Layout>
  )
}
