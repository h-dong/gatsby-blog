import React, { Component } from 'react'
import { graphql } from "gatsby"
import ReadingTime from "reading-time"
import { FaCalendarAlt, FaBookmark } from 'react-icons/fa'
import { MdLabel } from 'react-icons/md'
import Layout from '../components/layout'
import { DiscussionEmbed } from 'disqus-react'
import HeroImage from '../components/HeroImage'
import SEO from '../components/seo'

class BlogPost extends Component {
    render() {
        const { siteMetadata } = this.props.data.site;
        const { id, title, publishDate, hero, tags, slug, description, body } = this.props.data.contentfulBlogPost
        const blogTags = (tags) ? tags.map((tag, index) => <a key={index} href={`/tags/${tag}`}><MdLabel /> {tag}</a>) : null;

        const readingStats = ReadingTime(`${description.childMarkdownRemark.html} ${body.childMarkdownRemark.html}`);

        const disqusShortname = "haodong-io";
        const disqusConfig = {
            identifier: id,
            title: title
        };

        return (
            <Layout>
                <SEO siteMetadata={siteMetadata} title={title} description={description} image={hero} pathname={slug} />
                <div className="post">
                    <HeroImage hero={hero} />
                    <h1 className="post-title">{title}</h1>
                    <div className="post-meta">
                        <div><FaCalendarAlt /> {publishDate}</div>
                        <div><FaBookmark /> {readingStats.text}</div>
                    </div>
                    <div className="post-content" dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
                    <div className="post-content" dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
                    <div className="post-tags">{blogTags}</div>
                    <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
            </Layout>
        )
    }
}

export default BlogPost

export const pageQuery = graphql`
    query($slug: String) {
        site {
            siteMetadata {
                title
            }
        }
        contentfulBlogPost(slug: {eq: $slug})  {
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
            slug
            description {
                childMarkdownRemark {
                    html
                }
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`
