import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

const RecipeItem = props => {
  const {pageContext:{title}} = props;
  return <Layout>
      <SEO title={title} />
      <h3>{props.params.title}</h3>
      <pre>
          {
              JSON.stringify(props.data, null, 2)
          }
      </pre>
  </Layout>
}

export const query = graphql`
  query getSingleRecipe($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    id
    title
    cookTime
    description {
      description
    }
    servants
    content {
      tags
      tools
      ingredients
      instructions
    }
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
}

`

export default RecipeItem
