import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/index.scss'

import icon from '../assets/icon.svg'

const Layout = ({ children, data }) => {
    const site = data.site;
    let allTags = [];

    data.allContentfulBlogPost.edges.forEach(edge => {
        if (edge.node.tags) allTags = allTags.concat(edge.node.tags);
    });

    allTags = allTags.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });

    const recentArticles = [];

    for (let i = 0; i < 5; i += 1) {
        const article = data.allContentfulBlogPost.edges[i];
        recentArticles.push({ title: article.node.title, slug: article.node.slug });
    }

    return (
        <div className="body-container">
            <Helmet
                title={site.siteMetadata.title}
                meta={[
                    { name: 'description', content: 'Hi there, I\'m a software developer in London. I share pretty much everything and anything I find interesting on this blog.' },
                    { name: 'keywords', content: 'code, development, ux, programming, languages, frameworks, libraries, experiences' },
                ]}
                link={[
                    { rel: 'shortcut icon', type: 'image/svg', href: `${icon}` }
                ]}
            />
            <Header siteTitle={site.siteMetadata.title} />
            <main>
                <section>
                    {children()}
                </section>
                <aside>
                    <SideBar tags={allTags} articles={recentArticles} />
                </aside>
            </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
        allContentfulBlogPost(
            sort: { fields: [publishDate], order: DESC }
        ) {
            edges {
                node {
                    slug
                    title
                    ...allTags
                }
            }
        }
    }
`
