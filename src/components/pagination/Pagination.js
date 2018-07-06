import React from 'react'
import Link from "gatsby-link";

const NavLink = props => {
    if (!props.test) {
        return <Link className={props.className} to={props.url}>{props.text}</Link>;
    } else {
        return <span className={props.className}>{props.text}</span>;
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

        if (showPageButton(i, currentPage)) {
            link = <NavLink key={i} className={currentStyle} test={currentPage === i} url={url} text={i} />;
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
            { (firstPage) ?  null : <NavLink className="previous" test={firstPage} url={previousUrl} text="Previous" /> }
            {pages}
            { (lastPage) ?  null : <NavLink className="next" test={lastPage} url={nextUrl} text="Next" /> }
        </nav>
    );
};

export default Pagination;