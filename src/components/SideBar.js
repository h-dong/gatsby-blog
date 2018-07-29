import React from 'react'
import Link from 'gatsby-link'
import Tags from 'react-icons/lib/fa/tags'
import File from 'react-icons/lib/fa/file-o'
import FileText from 'react-icons/lib/fa/file-text-o'

const SideBar = ({ tags, articles }) => {
    const tagBadges = tags.map((tag, index) => (
        <Link key={index} to={`/tag/${tag}`}>{tag}</Link>
    ));

    const articleBadges = articles.map((article, index) => (
        <Link key={index} to={`/${article.slug}`}><File /> {article.title}</Link>
    ));

    return (
        <div id="side-bar">
            <section className="articles">
                <h3 className="title">
                    <FileText /> Recent Articles
                </h3>
                <div className="content">
                    {articleBadges}
                </div>
            </section>
            <section className="tags">
                <h3 className="title">
                    <Tags /> Tags
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
