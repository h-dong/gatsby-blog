import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-icons/lib/fa/calendar'

class BlogPost extends Component {
    render() {
        const { title, createdAt, description, body } = this.props.data.contentfulBlogPost
        return (
            <div className="post">
                <h1 className="post-title">{title}</h1>
                <div className="post-meta"><Calendar /> {createdAt}</div>
                <div dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
                <div className="post-content" dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
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
            title
            createdAt(formatString: "MMMM DD, YYYY")
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
