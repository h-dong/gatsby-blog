import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BlogPost extends Component {
    constructor() {
        super();
        console.log('props:', this.props)
    }
    render() {
        console.log('props:', this.props)
        const { title, createdAt, description, body } = this.props.data.contentfulBlogPost
        return (
            <div>
                <h1 style={{
                    borderBottom: '1px solid #ccc',
                    paddingBottom: '0.5rem'
                }}>
                    {title}
                </h1>
                <p>{createdAt}</p>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
                <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
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