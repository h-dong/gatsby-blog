import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-icons/lib/fa/calendar'
import Tag from 'react-icons/lib/fa/tag'
import ReactDisqusThread from 'react-disqus-thread';

class BlogPost extends Component {
    render() {
        const { id, title, publishDate, tags, description, body } = this.props.data.contentfulBlogPost
        const blogTags = (tags) ? tags.map((tag, index) => <a key={index} href={`/tags/${tag}`}><Tag /> {tag}</a>) : null;

        return (
            <div className="post">
                <h1 className="post-title">{title}</h1>
                <div className="post-meta">
                    <Calendar /> {publishDate}
                </div>
                <div className="post-content" dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
                <div className="post-content" dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
                <div className="post-tags">{blogTags}</div>
                <ReactDisqusThread
                    shortname="haodong-io"
                    identifier={id}
                    title={title} />
            </div>
        )
    }
}

BlogPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String) {
        contentfulBlogPost(slug: {eq: $slug})  {
            id
            title
            publishDate(formatString: "Do MMMM YYYY")
            tags
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
