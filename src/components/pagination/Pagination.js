import React from 'react'
import Link from "gatsby-link"
import ChevronRight from 'react-icons/lib/fa/chevron-right'
import ChevronLeft from 'react-icons/lib/fa/chevron-left'

const NavLink = props => {
    if (!props.test) {
        return <Link className={props.className} to={props.url}>{props.children}</Link>;
    } else {
        return <span className={props.className}>{props.children}</span>;
    }
};

const Pagination = ({ currentPage, pageCount, firstPage, lastPage }) => {
    const previousUrl = currentPage - 1 == 1 ? '' : `/page/${currentPage - 1}`
    const nextUrl = `/page/${currentPage + 1}`;

    const showPageButton = (index, current) => {
        const first = (index === 1);
        const last = (index === pageCount);
        const prev = (index === (current - 1)) || (index === (current - 2));
        const selected = (index === current);
        const next = (index === current + 1) || (index === current + 2);

        return (first || last || prev || selected || next);
    }

    const pages = [];

    for (let i = 1; i <= pageCount; i += 1) {
        const currentStyle = (currentPage === i) ? 'current' : null;
        const url = (i === 1) ? '' : `/page/${i}`;

        let link = null;

        if (pageCount <= 5 || showPageButton(i, currentPage)) {
            link = <NavLink key={i} className={currentStyle} test={currentPage === i} url={url}>{i}</NavLink>;
        } else {
            const lastIndex = i - 1;
            if (showPageButton(lastIndex, currentPage)) {
                link = <span key={i} className="space">...</span>;
            }
        }

        pages.push(link);
    }

    return (
        <nav id="pagination">
            <NavLink className={`previous${(firstPage) ? ' hidden' : ''}`} test={firstPage} url={previousUrl}><ChevronLeft /> <span className="desktop-only">Last</span></NavLink>
            {pages}
            <NavLink className={`next${(lastPage) ? ' hidden' : ''}`}test={lastPage} url={nextUrl}><span className="desktop-only">Next</span> <ChevronRight /></NavLink>
        </nav>
    );
};

export default Pagination;
