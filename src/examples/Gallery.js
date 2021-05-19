import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "photos"}, name: {ne: "logo"}}) {
    totalCount
    images: nodes {
      id
      relativePath
      name
      childImageSharp {
        gatsbyImageData(
          placeholder: TRACED_SVG
          layout: FIXED
          width: 200
          height: 200
        )
        
      }
    }
  }
}

`
const Gallery = () => {

    const data = useStaticQuery(Query);

    const { allFile: { totalCount, images } } = data;
    console.log({ totalCount, images })
    return (
        <Wrapper>
            {
                images.map(image =>{

                  const imageData = getImage(image);
                  console.log({imageData});

                  const {id, name, childImageSharp:{gatsbyImageData}} = image;
                  
                  return <article key={id} className="item">
                    <GatsbyImage className="gallery-img" image={gatsbyImageData} alt={name} />
                    <p className="title">{name}</p>
                  </article>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item{
    margin-right: 1rem;

    .gallery-img{
      border-radius: 1rem;
    }
    .title{
      text-align: center;
    }
  }

`

// using getImage is optional. But it provides a good null checking code which helps us in smooth image data extraction from query

export default Gallery
