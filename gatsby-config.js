require('dotenv').config()

module.exports = {
    siteMetadata: {
        siteUrl: `https://haodong.io`,
        author: 'Hao Dong',
        title: 'Hao\'s learning log',
        description: 'Development, UX, Programming Languages, Frameworks, Libraries, experiences and anything random.'
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID || '',
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
                host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com'
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
                                            publishDate(formatString: "Do MMM YYYY")
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
                    output: '/rss.xml',
                }]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Hao\'s learning log',
                short_name: 'Hao\'s blog',
                start_url: '/',
                background_color: '#fff',
                theme_color: '#555',
                display: 'minimal-ui',
                icon: 'src/assets/icon.svg', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        'gatsby-plugin-sass',
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {
                                js: 'javascript',
                            },
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                ],
            },
        },
    ],
};
