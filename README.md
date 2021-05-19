come on lets study about graphql, how to write queries and using queried data to render into webpage.

There are two types of queries, <StaticQuery> and <PageQuery>. We can StaticQuery in any component, but PageQuery must be used only on Page component.

Generally How Gatsby data flow works is, We have data source points, API's, JSON, Markdown etc; 
We have this graphql API syntax we use to query the data from the data sources
We have Query tags to get the data; some of the query StaticQuery PageQuery.

### Data sources

gatsby provides accessing the following types of local data. JSON, markdown, MDX( markdown with react jsx).
for external data, we can access the headless CMS(content management system) service with installing their plugins.