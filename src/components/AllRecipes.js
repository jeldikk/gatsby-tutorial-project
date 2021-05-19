import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import TagsList from "./TagsList"
import RecipesList from "./RecipesList"

const Query = graphql`
  {
    allContentfulRecipe {
      nodes {
        title
        id
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const AllRecipes = () => {

    const {allContentfulRecipe:{nodes}} = useStaticQuery(Query);
    // const  = queryData;

    // console.log({nodes})
  return (
    <section className="recipes-container">
      <TagsList recipes={nodes}/>
      <RecipesList recipes={nodes}/>
    </section>
  )
}

export default AllRecipes
