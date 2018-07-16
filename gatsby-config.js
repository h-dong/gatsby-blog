require('dotenv').config()

module.exports = {
    siteMetadata: {
        siteUrl: `https://haodong.io`,
        title: 'Hao\'s learning log',
        description: 'Development, UX, Programming Languages, Frameworks, Libraries, experiences and anything random.'
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID || '',
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                title
                                description
                                siteUrl
                                site_url: siteUrl
                            }
                        }
                    }
                `,
                feeds: [{
                    serialize: ({ query: { site, allContentfulBlogPost } }) => {
                        return allContentfulBlogPost.edges.map(edge => {
                            // TODO: remove published and updated

                            return {
                                title: edge.node.title,
                                url: `${site.siteMetadata.siteUrl}/${edge.node.slug}`,
                                guid: `${site.siteMetadata.siteUrl}/${edge.node.slug}`,
                                description: edge.node.description.childMarkdownRemark.html,
                                published: edge.node.publishDate,
                                updated: edge.node.updatedAt
                            };
                        });
                    },
                    query: `
                            {
                                allContentfulBlogPost(
                                    sort: { fields: [publishDate], order: DESC },
                                    limit: 1000,
                                ) {
                                    edges {
                                        node {
                                            slug
                                            title
                                            publishDate
                                            updatedAt
                                            description {
                                                childMarkdownRemark {
                                                    html
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        `,
                    output: "/rss.xml",
                }]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Hao's learning log",
                short_name: "Hao's blog",
                start_url: "/",
                background_color: "#f7f0eb",
                theme_color: "#a2466c",
                display: "minimal-ui",
                icon: "src/assets/icon.svg", // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        'gatsby-plugin-sass',
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                navigateFallback: `/404`
            }
        }
    ],
};
