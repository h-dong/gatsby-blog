import React from "react";
import { Helmet } from "react-helmet";
import SocialLogo from "../assets/social_logo.png";

// The recommended image ratio for an og:image is 1.91:1
const imageWidth = "1200";
const imageHeight = "630";

const SEO = ({ siteMetadata, title, description, pathname, image }) => {
    const metaTitle = title
        ? `${title} | ${siteMetadata.title}`
        : siteMetadata.title;
    const metaDescription = description
        ? description.childMarkdownRemark.html.replace(/<\/?[^>]+(>|$)/g, "")
        : siteMetadata.description;
    let metaImage = SocialLogo;
    if (image?.resize?.src) {
        metaImage = image.resize.src;
        // Replace the width and height e.g. ?w=700&h=400&fl=progressive&q=50&fit=fill"
        metaImage = metaImage.replace(/w=700/gi, `w=${imageWidth}`);
        metaImage = metaImage.replace(/h=400/gi, `h=${imageHeight}`);
    }
    const canonical = pathname ? `${siteMetadata.siteUrl}/${pathname}` : null;

    return (
        <Helmet
            title={metaTitle}
            link={
                canonical
                    ? [
                          {
                              rel: "canonical",
                              href: canonical,
                          },
                      ]
                    : []
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: "keywords",
                    content: siteMetadata.keywords,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:creator`,
                    content: siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(
                metaImage
                    ? [
                          {
                              property: "og:image",
                              content: metaImage,
                          },
                          {
                              property: "og:image:width",
                              content: imageWidth,
                          },
                          {
                              property: "og:image:height",
                              content: imageHeight,
                          },
                          {
                              name: "twitter:card",
                              content: "summary_large_image",
                          },
                      ]
                    : [
                          {
                              name: "twitter:card",
                              content: "summary",
                          },
                      ]
            )}
        />
    );
};

export default SEO;
