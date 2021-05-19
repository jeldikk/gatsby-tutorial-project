import React from "react"
import Layout from "../components/Layout"
// import Images from "../examples/Images"
import {StaticImage} from 'gatsby-plugin-image'

import Component from "../examples/gatsby-fetchingdata"
import ComponentFromScratch from "../examples/gatsby-fetchdata-from-scratch"
import SEO from "../components/SEO"
import AllRecipes from "../components/AllRecipes"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage layout="fullWidth" alt="hero page with eggs and flour" src="../assets/images/main.jpeg" className="hero-img" placeholder="tracedSVG" />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple recipes</h1>
              <h4>No fluff, Just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
    
}
