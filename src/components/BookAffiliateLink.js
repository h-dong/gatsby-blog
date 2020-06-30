import React from "react";

const Image = ({ imgsrc, title }) => {
    if (imgsrc) {
        return <img src={imgsrc} alt={`${title} book`} />;
    }

    return null;
};

const BookTitle = ({ title, subtitle }) => {
    if (!subtitle) {
        return <h3>{title}</h3>;
    }

    return (
        <h3>
            {title}: <small>{subtitle}</small>
        </h3>
    );
};

const BookAffiliateLink = ({ imgsrc, title, subtitle, author, link }) => {
    return (
        <a
            className="book-affiliate-link"
            href={link}
            rel="noopener noreferrer nofollow"
            target="_blank"
        >
            <Image imgsrc={imgsrc} title={title} />
            <div className="content">
                <BookTitle title={title} subtitle={subtitle} />
                <p>By {author}</p>
            </div>
        </a>
    );
};

export default BookAffiliateLink;
