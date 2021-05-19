import React from "react"
import { graphql, Link } from "gatsby"
import {setupTags} from "../utils/setupTags"
import slugify from 'slugify'

// const Query = graphql`
//   {
//     tags: allContentfulRecipeContentJsonNode {
//       distinct(field: tags)
//     }
//   }
// `

const TagsList = ({recipes}) => {
  const tagData = setupTags(recipes);
  // console.log({tagData})

  return <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
      {
          Object.entries(tagData).map(([name, value])=>{
            
            return <Link to={`/tags/${name}`}key={name}>{`${name} (${value})`}</Link>
          })
      }
      </div>
      
  </div>
}

export default TagsList
