import React, { Component } from "react";
import { graphql } from "gatsby";
import ReadingTime from "reading-time";
import rehypeReact from "rehype-react";
import { FaCalendarAlt, FaBookmark } from "react-icons/fa";
import { MdLabel } from "react-icons/md";
import Layout from "../components/layout";
import { DiscussionEmbed } from "disqus-react";
import HeroImage from "../components/HeroImage";
import SEO from "../components/SEO";
import BookAffiliateLink from "../components/BookAffiliateLink";

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "book-affiliate-link": BookAffiliateLink },
}).Compiler;

class BlogPost extends Component {
    render() {
        const {
            id,
            title,
            publishDate,
            hero,
            tags,
            description,
            body,
        } = this.props.data.contentfulBlogPost;
        const blogTags = tags
            ? tags.map((tag, index) => (
                  <a key={index} href={`/tags/${tag}`}>
                      <MdLabel /> {tag}
                  </a>
              ))
            : null;

        const readingStats = ReadingTime(
            `${description.childMarkdownRemark.html} ${body.childMarkdownRemark.html}`
        );

        const disqusShortname = "haodong-io";
        const disqusConfig = {
            identifier: id,
            title: title,
        };

        return (
            <Layout>
                <SEO title={title} description={description} image={hero} />
                <div className="post">
                    <HeroImage hero={hero} />
                    <h1 className="post-title">{title}</h1>
                    <div className="post-meta">
                        <div>
                            <FaCalendarAlt /> {publishDate}
                        </div>
                        <div>
                            <FaBookmark /> {readingStats.text}
                        </div>
                    </div>
                    <div
                        className="post-content"
                        dangerouslySetInnerHTML={{
                            __html: description.childMarkdownRemark.html,
                        }}
                    />
                    <div className="post-content">
                        {renderAst(body.childMarkdownRemark.htmlAst)}
                    </div>
                    <div className="post-tags">{blogTags}</div>
                    <a href="https://www.buymeacoffee.com/heyhao" target="_blank">
                        <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" />
                    </a>
                    <DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                    />
                </div>
            </Layout>
        );
    }
}

export default BlogPost;

export const pageQuery = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: { eq: $slug }) {
            id
            title
            publishDate(formatString: "Do MMMM YYYY")
            hero {
                resize(width: 700, height: 400) {
                    src
                }
                description
            }
            tags
            description {
                childMarkdownRemark {
                    html
                }
            }
            body {
                childMarkdownRemark {
                    htmlAst
                    html
                }
            }
        }
    }
`;
