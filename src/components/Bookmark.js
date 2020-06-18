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

const Bookmark = ({ imgsrc, title, subtitle, description, link }) => {
    return (
        <a
            className="bookmark"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image imgsrc={imgsrc} title={title} />
            <div>
                <BookTitle title={title} subtitle={subtitle} />
                <p>{description}</p>
            </div>
        </a>
    );
};

export default Bookmark;
