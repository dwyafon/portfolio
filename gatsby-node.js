//CommonJS syntax; import function(ality) from plugin/module to create slugs/friendly url's
const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

//getNode is a function -- gets a node from Gatsby's node graph; passed into the first function call;
//getNode is used to get the node's parent; the node's parent contains the file name used to create the slug
//basePath narrows the focus to the markdown folder
exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === "MarkdownRemark") {
        const { createNodeField } = actions // Restructuring Assignment (ES6); extracting one action/function from the actions object
    //Equivalent code: const createNodeField = actions.createNodeField    
        const slug = createFilePath({ node, getNode, basePath: "markdown"})
        createNodeField( {
            node,
            name: "slug",
            value: slug
        })
    }
}

// Create post pages programmatically
exports.createPages = ({ graphql, actions }) => {
    const { createPage} = actions

    return new Promise(resolve => {
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }`
        ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node}) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/post.js"),
                context: {
                    slug: node.fields.slug,
                },
            })
        })
        resolve()
        })
    })
}






