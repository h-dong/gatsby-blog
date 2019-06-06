import React from 'react'
import { Link } from "gatsby"
import { MdChevronRight, MdLabel }  from 'react-icons/md'
import { FaCalendarAlt } from 'react-icons/fa'
import Layout from "../components/layout"
import Pagination from '../components/pagination/Pagination'

const BlogPost = ({ node }) => {
    const tags = (node.tags) ? node.tags.map((tag, index) => <a key={index} href={`/tag/${tag}`}><MdLabel /> {tag}</a>) : null;

    return (
        <article className="card">
            <h1 className="card-title">
                <Link to={`/${node.slug}`}>{node.title}</Link>
            </h1>
            <div className="card-meta">
                <FaCalendarAlt /> <span>{node.publishDate}</span>
            </div>
            <div className="card-content" lang="en" dangerouslySetInnerHTML={{ __html: node.description.childMarkdownRemark.html }} />
            <div className="card-tags">{tags}</div>
            <div className="card-action">
                <Link to={`/${node.slug}`}>
                    Read More <MdChevronRight />
                </Link>
            </div>
        </article>
    )
}

const Blogs = ({ pageContext }) => {
    const { group, index, first, last, pageCount } = pageContext;

    return (
        <Layout>
            <div className="cards">
                {group.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
                <Pagination currentPage={index} pageCount={pageCount} firstPage={first} lastPage={last} />
            </div>
        </Layout>
    )
}

export default Blogs
