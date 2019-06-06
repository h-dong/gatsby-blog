import React from 'react'
import { Link } from 'gatsby'
import { MdHome, MdSearch, MdAccountCircle, MdRssFeed } from 'react-icons/md';

const Header = ({ siteTitle }) => {
    const homePath = '/';
    const searchPath = '/search';
    const aboutPath = '/about';
    const windowLocationPath = (typeof window !== 'undefined' && window) ? window.location.pathname : false;
    const onHomePage = (windowLocationPath) ? windowLocationPath === homePath : false;
    const onSearchPage = (windowLocationPath) ? windowLocationPath.indexOf(searchPath) > -1 : false;
    const onAboutPage = (windowLocationPath) ? windowLocationPath.indexOf(aboutPath) > -1 : false;

    return (
        <header id="header">
            <h1 style={{ display: 'none' }}>{siteTitle}</h1>
            <Link to="/" className="link">{siteTitle}</Link>
            <p>Development, UX, Programming Languages, Frameworks, Libraries, experiences and anything random.</p>
            <nav-menu>
                <Link to="/" className={onHomePage ? 'current' : null}><MdHome /> Home</Link>
                <Link to={searchPath} className={onSearchPage ? 'current' : null}><MdSearch /> Search</Link>
                <Link to={aboutPath} className={onAboutPage ? 'current' : null}><MdAccountCircle /> About Me</Link>
                <a href="/rss.xml"><MdRssFeed /> RSS</a>
            </nav-menu>
        </header>
    );
}

export default Header
