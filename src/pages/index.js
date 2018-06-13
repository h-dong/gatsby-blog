import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome';

const BlogPost = ({ node }) => {
    return (
        <article className="card">
            <h1 className="card-title">
                <Link to={node.slug}>{node.title}</Link>
            </h1>
            <div className="card-meta">{node.createdAt}</div>
            <div className="card-content" lang="en" dangerouslySetInnerHTML={{ __html: node.description.childMarkdownRemark.html }} />
            <div className="card-action">
                <Link to={node.slug}>
                    Read More <FontAwesome name='chevron-right' />
                </Link>
            </div>
        </article>
    )
}

const IndexPage = (props) => {
    return (
        <div className="cards">
            {props.data.allContentfulBlogPost.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
        </div>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
        allContentfulBlogPost(
            filter: {
                node_locale: {eq: "en-US"}
            },
            sort: {
                fields: [createdAt], order: DESC
            }
        ) {
          edges {
            node {
                id
                title
                slug
                createdAt(formatString: "DD-MM-YYYY")
                description {
                    childMarkdownRemark {
                        html
                    }
                }
            }
          }
        }
    }
`