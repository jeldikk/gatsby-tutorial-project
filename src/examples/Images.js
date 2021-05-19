import React from "react"
import styled from "styled-components"
import image from "../assets/images/big.jpg"
import { StaticImage } from "gatsby-plugin-image"
const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>Constained/default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          placeholder="dominantColor"
          alt="food"
          height={400}
          className="example-img"
        />
      </article>

      <article>
        <h3>Fixed</h3>
        <StaticImage
          className="example-img"
          placeholder="blurred"
          layout="fixed"
          src="../assets/images/recipe-1.jpeg"
          alt="food fixed layout"
          width={200}
        />
      </article>

      <article>
        <h3>Full Width</h3>
        <StaticImage
          className="example-img"
          layout="fullWidth"
          placeholder="tracedSVG"
          src="../assets/images/recipe-1.jpeg"
          alt="food fullwidth image"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;

  article {
    border: 2px solid red;

    .example-img {
      border-radius: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Images
