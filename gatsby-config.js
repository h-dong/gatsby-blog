require('dotenv').config()

module.exports = {
    siteMetadata: {
        siteUrl: `https://haodong.io`,
        title: 'Hao\'s learning log',
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
        `gatsby-plugin-offline`
    ],
};
