import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header id="header">
    <h1 style={{ display: 'none' }}></h1>
    <Link to="/" className="link">{siteTitle}</Link>
    <p>Development, UX, Programming Languages, Frameworks, Libraries, experiences and anything random.</p>
  </header>
)

export default Header
