import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import RecipesList from "../components/RecipesList"

import SEO from "../components/SEO"

const Query = graphql`
  {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
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

const Contact = () => {

  const queryData = useStaticQuery(Query);
  const {allContentfulRecipe:{nodes}} = queryData;

  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Here you can message me</h3>
            <p>
              Labore magna sit veniam laborum ullamco amet mollit ullamco
              excepteur aliquip esse cupidatat ea. Do tempor ex aliqua dolor
              minim est esse dolore irure pariatur aute. Anim sint non
              adipisicing ut ad sunt nostrud Lorem consectetur fugiat aliquip ad
              reprehenderit. Exercitation ex velit ullamco non culpa adipisicing
              do consectetur. Cupidatat aliqua in veniam cillum ex irure commodo
              eu veniam enim. Tempor consectetur consequat ex cupidatat mollit
              officia est sit ullamco velit ullamco. Laboris pariatur cupidatat
              consectetur sunt veniam aliqua.
            </p>
            <p>
              Proident nulla officia qui enim officia nulla adipisicing qui
              ipsum Lorem ipsum enim voluptate. Velit eiusmod veniam ex proident
              pariatur. Nulla do est laboris laboris culpa ipsum ullamco
              ullamco.
            </p>
            <p>
              Sunt elit ad pariatur nulla sit nisi ut officia velit do enim
              ullamco. Quis voluptate Lorem est Lorem nostrud reprehenderit ea
              id tempor cupidatat magna. Mollit nostrud ex aliquip exercitation
              deserunt elit. Amet id eu deserunt commodo enim eu laboris irure
              aute magna incididunt voluptate sunt. Ut exercitation ullamco elit
              non laborum non laboris commodo incididunt cupidatat laborum.
              Cupidatat et non laboris elit.
            </p>
          </article>
          <article>
            <form className="form contact-form" action="https://formspree.io/f/myylenkk" method="POST">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" row={5} />
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
            <h5>Look at these Awesome dishes</h5>
            <RecipesList recipes={nodes} />
        </section>
      </main>
    </Layout>
  )
}

// https://formspree.io/f/myylenkk

export default Contact
