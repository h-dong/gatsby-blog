import React from 'react'
import { Link } from 'gatsby'
import { MdHome, MdSearch, MdBook, MdAccountCircle, MdRssFeed } from 'react-icons/md';

const Header = ({ siteTitle }) => {
    const homePath = '/';
    const searchPath = '/search';
    const booksPath = '/books';
    const aboutPath = '/about';

    return (
        <header id="header">
            <h1 style={{ display: 'none' }}>{siteTitle}</h1>
            <Link to="/" className="link">{siteTitle}</Link>
            <p>Coding, Software Development, UX, Programming Languages, Frameworks, Libraries, Finance, Productivity, Career tips, Personal Development</p>
            <nav-menu>
                <Link to={homePath} activeClassName="active"><MdHome /> Home</Link>
                <Link to={searchPath} activeClassName="active"><MdSearch /> Search</Link>
                <Link to={aboutPath} activeClassName="active"><MdAccountCircle /> About</Link>
                <Link to={booksPath} activeClassName="active"><MdBook /> Books for life</Link>
                <a href="/rss.xml"><MdRssFeed /> RSS</a>
            </nav-menu>
        </header>
    );
}

export default Header
