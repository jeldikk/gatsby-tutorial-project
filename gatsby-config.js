/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'My simple recipe site powered by gatsby',
    description: "duplication of project from udemy",
    author: "@jeldikk",
    person: {
      name: 'kamal',
      age: 'huaha'
    },
    sampleData: ['item 1', 'item 2', 'item 3'],
    complexData: [
      {
        name: 'kamal',
        age: 29
      },
      {
        name: "jeldikk",
        age: 30
      }
    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: 'photos',
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: 'styles',
        path: `${__dirname}/src/assets/css/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: 'examples',
        path: `${__dirname}/src/examples`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_API_KEY}`
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options:{
        fonts:{
          google:[
            {
              family: "Pattaya",
              variants: ["400", "500", "600", "700"]
            },
            {
              family: "Montserrat",
              variants: ["300", "400", "500"]
            },
            {
              family: "Inconsolata",
              variants: ["300", "400", "600", "700"]
            }
          ]
        }
      }
    },
  ],
}
