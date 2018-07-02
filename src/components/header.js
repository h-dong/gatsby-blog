import React from 'react'
import Link from 'gatsby-link'
import Home from 'react-icons/lib/md/home';
import Me from 'react-icons/lib/fa/user';
import RSS from 'react-icons/lib/md/rss-feed';

const Header = ({ siteTitle }) => {
  const aboutPath = '/about';

  const navLinks = [];

  const windowLocationPath = (typeof window !== 'undefined' && window) ? window.location.pathname : false;

  if (windowLocationPath === aboutPath) {
    navLinks.push(<Link key="home" to="/" ><Home /> Home</Link>);
    navLinks.push(<Link key="about" to={aboutPath} className="current"><Me /> About Me</Link>);
  } else {
    navLinks.push(<Link key="home" to="/" className="current"><Home /> Home</Link>);
    navLinks.push(<Link key="about" to={aboutPath} ><Me /> About Me</Link>);
  }

  return (
    <header id="header">
      <h1 style={{ display: 'none' }}></h1>
      <Link to="/" className="link">{siteTitle}</Link>
      <p>Development, UX, Programming Languages, Frameworks, Libraries, experiences and anything random.</p>
      <nav-menu>
        {navLinks}
        <a><RSS /> RSS</a>
      </nav-menu>
    </header>
  );
}

export default Header
