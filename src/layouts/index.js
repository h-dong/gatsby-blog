import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/index.scss'

const Layout = ({ children, data }) => (
  <div className="body-container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Hi there, I\'m a software developer in London. I share pretty much everything and anything I find interesting on this blog.' },
        { name: 'keywords', content: 'code, development, ux, programming, languages, frameworks, libraries, experiences' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <main>
      <section>
        {children()}
      </section>
      <aside>
        <div id="side-bar">
          <section>
              <h1>Links</h1>
              <ul>
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
              </ul>
          </section>
          <section>
              <h1>Links</h1>
              <ul>
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
              </ul>
          </section>
        </div>
      </aside>
    </main>
    <Footer />
  </div>
)

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
  }
`
