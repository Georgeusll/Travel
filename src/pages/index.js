import React from "react"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Restaurants from "../components/Restaurants"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading = "Trips"/>  
    <Restaurants heading = "Restaurants"/>
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
