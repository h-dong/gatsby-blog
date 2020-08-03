import React, { useState } from "react";
import { Link } from "gatsby";
import {
    MdHome,
    MdSearch,
    MdBook,
    MdAccountCircle,
    MdRssFeed,
    MdMenu,
} from "react-icons/md";

const homePath = "/";
const searchPath = "/search";
const booksPath = "/books";
const aboutPath = "/about";

const navLinks = (
    <>
        <Link to={homePath} activeClassName="active">
            <MdHome /> Home
        </Link>
        <Link to={searchPath} activeClassName="active">
            <MdSearch /> Search
        </Link>
        <Link to={aboutPath} activeClassName="active">
            <MdAccountCircle /> About
        </Link>
        <Link to={booksPath} activeClassName="active">
            <MdBook /> Books for life
        </Link>
        <a href="/rss.xml">
            <MdRssFeed /> RSS
        </a>
    </>
);
const originalStyle = window.getComputedStyle(document.body).overflow;

const Header = ({ siteTitle }) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleOverlay = (value) => {
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalStyle;
        }
        setMobileNavOpen(value);
    };

    return (
        <header id="header">
            <nav className="mobile">
                <button type="button" onClick={() => toggleOverlay(true)}>
                    <MdMenu />
                </button>
            </nav>
            {mobileNavOpen && (
                <div
                    className="overlay"
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => toggleOverlay(false)}
                    onClick={() => toggleOverlay(false)}
                >
                    {navLinks}
                </div>
            )}
            <h1 style={{ display: "none" }}>{siteTitle}</h1>
            <Link to="/" className="link">
                {siteTitle}
            </Link>
            <p>
                Coding, Software Development, UX, Programming Languages,
                Frameworks, Libraries, Finance, Productivity, Career tips,
                Personal Development
            </p>
            <nav className="desktop">{navLinks}</nav>
        </header>
    );
};

export default Header;
