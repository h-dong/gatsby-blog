import React from 'react'
import Link from 'gatsby-link'
import ChevronRight from 'react-icons/lib/md/chevron-right'
import Calendar from 'react-icons/lib/fa/calendar'
import Pagination from '../components/pagination/Pagination'

const BlogPost = ({ node }) => (
    <article className="card">
        <h1 className="card-title">
            <Link to={`/${node.slug}`}>{node.title}</Link>
        </h1>
        <div className="card-meta"><Calendar /> <span>{node.publishDate}</span></div>
        <div className="card-content" lang="en" dangerouslySetInnerHTML={{ __html: node.description.childMarkdownRemark.html }} />
        <div className="card-action">
            <Link to={node.slug}>
                Read More <ChevronRight />
            </Link>
        </div>
    </article>
)

const Blogs = ({ pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;

    return (
        <div className="cards">
            {group.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
            <Pagination currentPage={index} pageCount={pageCount} firstPage={first} lastPage={last} />
        </div>
    )
}

export default Blogs
