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

import icon from "../assets/icon_light.svg";
import iconDark from "../assets/icon_dark.svg";

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
        <Link to={booksPath} activeClassName="active">
            <MdBook /> Book Recommendations
        </Link>
        <Link to={aboutPath} activeClassName="active">
            <MdAccountCircle /> About
        </Link>
        <a href="/rss.xml">
            <MdRssFeed /> RSS
        </a>
    </>
);
const originalStyle =
    typeof window !== `undefined` &&
    window.getComputedStyle(document.body).overflow;

const Header = ({ siteTitle, keywords }) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    function handleMobileNavChange(value) {
        if (value) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalStyle;
        }
        setMobileNavOpen(value);
    }

    return (
        <header id="header">
            <nav className="mobile">
                <img className="logo" src={iconDark} alt="logo" />
                <button
                    type="button"
                    onClick={() => handleMobileNavChange(true)}
                >
                    <MdMenu />
                </button>
            </nav>
            {mobileNavOpen && (
                <div
                    className="overlay"
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => handleMobileNavChange(false)}
                    onClick={() => handleMobileNavChange(false)}
                >
                    {navLinks}
                </div>
            )}

            <h1 style={{ display: "none" }}>{siteTitle}</h1>
            <Link to="/" className="link site-heading">
                <img className="logo" src={icon} alt="logo" /> {siteTitle}
            </Link>
            <p>{keywords}</p>
            <nav className="desktop">{navLinks}</nav>
        </header>
    );
};

export default Header;
