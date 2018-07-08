const path = require('path')
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('src/templates/blog-post.js')
        resolve(
            graphql(`
                {
                    allContentfulBlogPost(
                        sort: { fields: [publishDate], order: DESC }
                    ) {
                        edges {
                            node {
                                id
                                slug
                                title
                                tags
                                publishDate(formatString: "DD-MM-YYYY")
                                description {
                                    childMarkdownRemark {
                                        html
                                    }
                                }
                            }
                        }
                    }
                }
            `).then((result) => {
                    if (result.errors) {
                        reject(result.errors)
                    }

                    createPaginatedPages({
                        edges: result.data.allContentfulBlogPost.edges,
                        createPage: createPage,
                        pageTemplate: "src/templates/blogs.js",
                        pageLength: 10, // This is optional and defaults to 10 if not used
                        pathPrefix: "page",
                        buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/${index}` : `/`,
                        context: {} // This is optional and defaults to an empty object if not used
                    });

                    result.data.allContentfulBlogPost.edges.forEach((edge) => {
                        createPage({
                            path: edge.node.slug,
                            component: blogPostTemplate,
                            context: {
                                slug: edge.node.slug
                            }
                        })
                    })
                    return
                })
        )
    })
}
