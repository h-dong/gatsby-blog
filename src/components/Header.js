import React from 'react'
import { Link } from 'gatsby'
import { MdHome, MdSearch, MdAccountCircle, MdRssFeed } from 'react-icons/md';

const Header = ({ siteTitle }) => {
    const searchPath = '/search';
    const aboutPath = '/about';

    const navLinks = [];
    const windowLocationPath = (typeof window !== 'undefined' && window) ? window.location.pathname : false;
    const onSearchPage = (windowLocationPathwindow) ? LocationPath.indexOf(searchPath) > -1 : false;
    const onAboutPage = (windowLocationPathwindow) ? windowLocationPath.indexOf(aboutPath) > -1 : false;

    if (onAboutPage) {
        navLinks.push(<Link key="home" to="/" ><MdHome /> Home</Link>);
        navLinks.push(<Link key="search" to={searchPath}><MdSearch /> Search</Link>);
        navLinks.push(<Link key="about" to={aboutPath} className="current"><MdAccountCircle /> About Me</Link>);
    } else if (onSearchPage) {
        navLinks.push(<Link key="home" to="/" ><MdHome /> Home</Link>);
        navLinks.push(<Link key="search" to={searchPath} className="current"><MdSearch /> Search</Link>);
        navLinks.push(<Link key="about" to={aboutPath}><MdAccountCircle /> About Me</Link>);
    } else {
        navLinks.push(<Link key="home" to="/" className="current"><MdHome /> Home</Link>);
        navLinks.push(<Link key="search" to={searchPath}><MdSearch /> Search</Link>);
        navLinks.push(<Link key="about" to={aboutPath}><MdAccountCircle /> About Me</Link>);
    }

    return (
        <header id="header">
            <h1 style={{ display: 'none' }}>{siteTitle}</h1>
            <Link to="/" className="link">{siteTitle}</Link>
            <p>Development, UX, Programming Languages, Frameworks, Libraries, experiences and anything random.</p>
            <nav-menu>
                {navLinks}
                <a href="/rss.xml"><MdRssFeed /> RSS</a>
            </nav-menu>
        </header>
    );
}

export default Header
