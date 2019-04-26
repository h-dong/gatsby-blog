import React from 'react'
import { graphql, Link } from "gatsby"
import { FaTags, FaRegFileAlt, FaFileAlt } from 'react-icons/fa'
import { MdLabelOutline } from 'react-icons/md'

const SideBar = ({ tags, articles }) => {
    const tagBadges = tags.map((tag, index) => (
        <Link key={index} to={`/tag/${tag}`}><MdLabelOutline /> {tag}</Link>
    ));

    const articleBadges = articles.map((article, index) => (
        <Link key={index} to={`/${article.slug}`}><FaRegFileAlt /> {article.title}</Link>
    ));

    return (
        <div id="side-bar">
            <section className="articles">
                <h3 className="title">
                    <FaFileAlt /> Recent Articles
                </h3>
                <div className="content">
                    {articleBadges}
                </div>
            </section>
            <section className="tags">
                <h3 className="title">
                    <FaTags /> Tags
                </h3>
                <div className="content">
                    {tagBadges}
                </div>
            </section>
        </div>
    );
};

export default SideBar;


export const query = graphql`
    fragment allTags on ContentfulBlogPost {
        tags
    }
`
