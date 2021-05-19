import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'

const Query = graphql`
    {
        site{
            siteMetadata{
                title,
                author,
                description,
                person{
                    name
                }
            }
        }
    }
`

const FetchDataFromScratch = ()=>{
    const data = useStaticQuery(Query);

    // console.log({data})
    return <div>
        from scratch
    </div>
}

export default FetchDataFromScratch;