import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "../styles/index.scss";

import icon from "../assets/icon_light.svg";

const Layout = ({ children, data }) => {
    const { siteMetadata } = data.site;
    let allTags = [];

    data.allContentfulBlogPost.edges.forEach((edge) => {
        if (edge.node.tags) allTags = allTags.concat(edge.node.tags);
    });

    allTags = allTags.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });

    const recentArticles = [];

    for (let i = 0; i < 5; i += 1) {
        const article = data.allContentfulBlogPost.edges[i];
        recentArticles.push({
            title: article.node.title,
            slug: article.node.slug,
        });
    }

    return (
        <div className="body-container">
            <Helmet
                title={siteMetadata.title}
                meta={[
                    { name: "description", content: siteMetadata.description },
                    { name: "keywords", content: siteMetadata.keywords },
                ]}
                link={[
                    {
                        rel: "shortcut icon",
                        type: "image/svg",
                        href: `${icon}`,
                    },
                    {
                        rel: "preconnect",
                        href: "https://stats.g.doubleclick.net",
                    },
                    {
                        rel: "preconnect",
                        href: "https://www.google-analytics.com",
                    },
                ]}
            />
            <Header
                keywords={siteMetadata.keywords}
                siteTitle={siteMetadata.title}
            />
            <main>
                <section>{children}</section>
                <aside>
                    <SideBar tags={allTags} articles={recentArticles} />
                </aside>
            </main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.func,
};

export default ({ children }) => (
    <StaticQuery
        query={graphql`
            {
                site {
                    siteMetadata {
                        title
                        description
                        keywords
                    }
                }
                allContentfulBlogPost(
                    sort: { fields: [publishDate], order: DESC }
                ) {
                    edges {
                        node {
                            slug
                            title
                            ...allTags
                        }
                    }
                }
            }
        `}
        render={(data) => Layout({ children, data })}
    />
);
