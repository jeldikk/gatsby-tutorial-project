import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const TagTemplate = (props) => {
    console.log({props})
    const {data,pageContext:{tag}} = props;
    // const recipes = 
    const {recipes:{nodes}} = data;
    return (
        <Layout>
            <SEO title={tag.toUpperCase()} />
            <h2>tag template page {tag}</h2>
            <RecipesList recipes={nodes} />
        </Layout>
    )
}


//The argument passed to query function name and the variable in context from gatsby-node.js should match.

export const query = graphql`
    query GetRecipesByTag($tag: String) {
        recipes:allContentfulRecipe(
            sort: {fields: title, order: ASC}
            filter: {content: {tags: {eq: $tag}}}
        ) {
            nodes {
                id
                title
                servants
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

export default TagTemplate
