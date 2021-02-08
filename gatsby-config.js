require("dotenv").config();

module.exports = {
    siteMetadata: {
        url: "https://blog.hao.dev",
        author: "Hao Dong",
        title: "Hao's learning log",
        titleTemplate: "%s · Hao's learning log",
        keywords:
            "Coding, Software, Web Development, UX, Productivity, Career tips, Personal Development",
        description:
            "I write about software development, productivity, career tips, personal development and more!",
        twitterUsername: "@_hdong",
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID || "",
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
                host: process.env.CONTENTFUL_HOST || "cdn.contentful.com",
            },
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
                                keywords
                                url
                                site_url: url
                                siteUrl: url
                            }
                        }
                    }
                `,
                feeds: [
                    {
                        serialize: ({
                            query: { site, allContentfulBlogPost },
                        }) =>
                            allContentfulBlogPost.edges.map((edge) => ({
                                title: edge.node.title,
                                url: `${site.siteMetadata.siteUrl}/${edge.node.slug}`,
                                guid: `${site.siteMetadata.siteUrl}/${edge.node.slug}`,
                                date: edge.node.publishDate,
                                description:
                                    edge.node.description.childMarkdownRemark
                                        .html,
                            })),
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
                        title: "Hao's Learning Log RSS Feed",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Hao's learning log",
                short_name: "Hao's blog",
                start_url: "/",
                background_color: "#fff",
                theme_color: "#555",
                display: "minimal-ui",
                icon: "src/assets/icon_light.svg", // This path is relative to the root of the site.
            },
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("dart-sass"),
            },
        },
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
                                js: "javascript",
                            },
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                    {
                        resolve: "gatsby-remark-component-parent2div",
                        options: {
                            components: ["book-affiliate-link"],
                            verbose: true,
                        },
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow noopener noreferrer",
                        },
                    },
                ],
            },
        },
    ],
};
