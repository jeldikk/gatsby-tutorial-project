import React from 'react'
import {Link} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import slugify from 'slugify'
const RecipesList = ({recipes=[]}) => {
    return (
        <div className="recipes-list">
            {
                recipes.map((recipe) =>{
                    const {id, title, image, cookTime} = recipe;
                    // console.log({title})
                    const slug = slugify(title,{lower: true});
                    // console.log({slug})
                    return <Link key={id} to={`/recipe/${slug}`} className="recipe">
                        <GatsbyImage image={image.gatsbyImageData} className="recipe-img" alt={title} />
                        <h5>{title}</h5>
                        <p>Cook Time: {cookTime}min</p>
                    </Link>
                })
            }
        </div>
    )
}

export default RecipesList
