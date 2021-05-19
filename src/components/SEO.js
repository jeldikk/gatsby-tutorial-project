import React from 'react'
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby'

const Query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

const SEO = ({title, description}) => {
    // console.log({props})
    const {site} = useStaticQuery(Query);
    // console.log("log from SEO")
    // console.log({site})
    return (
        <Helmet title={`${title} | ${site.siteMetadata.title}`} meta={[{name: "description", content: description}]} htmlAttributes={{lang: "en"}}>

        </Helmet>
    )
}

export default SEO
