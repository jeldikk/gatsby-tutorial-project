import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Query = graphql`
    {
        site{
            siteMetadata{
                title,
                author,
                description,
                person{
                    name,
                    age
                },
                complexData{
                    name
                }
            }
        }
    }
`

const ComponentName = () => {
  const data = useStaticQuery(Query)
//   console.log({data});
  return <div>
      <div>
          {data.site.siteMetadata.description}
      </div>
      <div>
          {data.site.siteMetadata.complexData.length}
      </div>
  </div>
}

export default ComponentName
