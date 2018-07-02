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
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        'gatsby-plugin-sass'
    ],
};