import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ siteMetadata, title, description, pathname, image }) => {
    const descriptionWithoutHTML = description.childMarkdownRemark.html.replace(
        /<\/?[^>]+(>|$)/g,
        ""
    );
    const metaDescription = descriptionWithoutHTML || siteMetadata.description;
    const metaImage = image?.src ? `${siteMetadata.siteUrl}${image.src}` : null;
    const canonical = pathname ? `${siteMetadata.siteUrl}${pathname}` : null;

    return (
        <div>
            {JSON.stringify(metaDescription)}
            <Helmet
                title={title}
                titleTemplate={`%s | ${siteMetadata.title}`}
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
                                  content: image,
                              },
                              {
                                  property: "og:image:width",
                                  content: metaImage.width,
                              },
                              {
                                  property: "og:image:height",
                                  content: metaImage.height,
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
        </div>
    );
};

export default SEO;
