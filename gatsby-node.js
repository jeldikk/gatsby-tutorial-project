const { result } = require('lodash');
const path = require('path');



//If there are multiple words in a name, we need to slugify it using slugify module.
exports.createPages = async ({graphql, actions, reporter}) => {
   
    reporter.info("starting of create pages");
    const {createPage} = actions;
    console.log("createPages function from gatsby-node.js");
    const baseTemplate = path.resolve("./src/template/tag-template.js");

    const result = await graphql(`
      {
        recipes:allContentfulRecipe {
          nodes {
            content {
              tags
            }
          }
        }
      }
    `
    );

    const {data:{recipes:{nodes}}} = result;

    nodes.map((rec)=>{
        rec.content.tags.map((tag)=>{
            createPage({
                path: `/tags/${tag}`,
                component: baseTemplate,
                context:{
                    tag: tag
                }
            })
        })
    })


}