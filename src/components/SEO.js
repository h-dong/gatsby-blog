import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import SocialLogo from "../assets/social_logo.png";

// The recommended image ratio for an og:image is 1.91:1
const imageWidth = "1200";
const imageHeight = "630";

const SEO = ({ title, description, image, article = false }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        titleTemplate,
        siteDescription,
        siteUrl,
        twitterUsername,
    } = site.siteMetadata;

    let metaImage = SocialLogo;
    if (image?.resize?.src) {
        metaImage = image.resize.src;
        // Replace the width and height e.g. ?w=700&h=400&fl=progressive&q=50&fit=fill"
        metaImage = metaImage.replace(/w=700/gi, `w=${imageWidth}`);
        metaImage = metaImage.replace(/h=400/gi, `h=${imageHeight}`);
    }

    const metaDescription = description
        ? description.childMarkdownRemark.html.replace(/<\/?[^>]+(>|$)/g, "")
        : siteDescription;

    const seo = {
        description: metaDescription,
        image: metaImage,
        url: `${siteUrl}/${pathname}`,
    };

    return (
        <Helmet title={title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            {/* OG */}
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
                <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    );
};

export default SEO;

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                titleTemplate
                siteDescription: description
                siteUrl: url
                siteKeywords: keywords
                siteAuthor: author
                twitterUsername
            }
        }
    }
`;
