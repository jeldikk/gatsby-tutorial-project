import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../components/Layout"
import {Link} from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import RecipesList from '../components/RecipesList'

import SEO from "../components/SEO"

const Query = graphql`
    {
  allContentfulRecipe(filter: {featured: {eq: true}}) {
    nodes {
      title
      id
      cookTime
      featured
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}
`

const About = () => {

    const queryData = useStaticQuery(Query);
    const {allContentfulRecipe:{nodes}} = queryData;
    // console.log({nodes})
    return (
       <Layout>
           <SEO title="About" />
           <main className="page">
               <section className="about-page">
                   <article>
                       <h2>I'm baby coloring book poke taxidermy</h2>
                       <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
                       <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
                       <Link to="/contact" className="btn">contact</Link>
                   </article>
                   <StaticImage src="../assets/images/about.jpeg" placeholder="blurred" alt="Person Pouring salt in bowl" className="about-img" />
               </section>
               <section className="featured-recipes">
                   <h5>Look at these favourites !!!</h5>
                   <RecipesList recipes={nodes}/>
               </section>
            </main>       
       </Layout>
    )
}

export default About
