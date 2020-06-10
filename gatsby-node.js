const path = require('path')
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('src/templates/blog-post.js')
        const tagsTemplate = path.resolve('src/templates/tags.js')
        resolve(
            graphql(`
                {
                    site {
                        siteMetadata {
                            title
                            description
                            keywords
                            author
                            siteUrl
                        }
                    }
                    allContentfulBlogPost(
                        sort: { fields: [publishDate], order: DESC }
                    ) {
                        edges {
                            node {
                                id
                                slug
                                title
                                tags
                                publishDate(formatString: "Do MMMM YYYY")
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
                    context: {
                        siteMetadata: result.data.site.siteMetadata,
                    } // This is optional and defaults to an empty object if not used
                });

                const tagPages = {};

                result.data.allContentfulBlogPost.edges.forEach((edge) => {
                    if (edge.node.tags) {
                        edge.node.tags.forEach(tag => {
                            if (!tagPages[tag]) tagPages[tag] = [];

                            tagPages[tag].push({
                                title: edge.node.title,
                                slug: edge.node.slug,
                                publishDate: edge.node.publishDate
                            });
                        });
                    }

                    createPage({
                        path: edge.node.slug,
                        component: blogPostTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                });

                for (const key in tagPages) {
                    if (tagPages.hasOwnProperty(key)) {
                        createPage({
                            path: `tag/${key}`,
                            component: tagsTemplate,
                            context: {
                                name: key,
                                data: tagPages[key]
                            }
                        });
                    }
                }

                return;
            })
        )
    })
}
