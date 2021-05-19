import React from 'react';
import {graphql} from 'gatsby'

import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"
const testing = (props)=>{

    console.log({props})
    const {site:{info:{author, title, description}}} = props.data;
    return (
        <Layout>
            <main className="page">
            <Gallery />
            </main>
        </Layout>
    )
}

export const data = graphql`
    query{
        site{
            info: siteMetadata{
                author,
                title,
                description,
                complexData{
                    name,
                    age
                }
            }
        }
    }
`
// export const data
export default testing;