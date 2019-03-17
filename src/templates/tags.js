import React from 'react'
import Link from 'gatsby-link'

const Tags = ({ pathContext }) => {
    const { name, data } = pathContext;
    let years = null;

    if (data.length) {
        years = [];

        const uniqueYears = data.map(elem => elem.publishDate.slice(-4))
            .filter((value, index, self) => self.indexOf(value) === index);

        uniqueYears.forEach((uniqueYear, index) => {
            const listItems = data.filter(record => uniqueYear === record.publishDate.slice(-4))
                .map((record, index) => (
                    <li key={index}>
                        <span>{record.publishDate}</span>
                        <a href={`/${record.slug}`}>{record.title}</a>
                    </li>
                ));

            if (uniqueYear) {
                years.push(
                    <div key={index}>
                        <h2>{uniqueYear}</h2>
                        <ul>{listItems}</ul>
                    </div>
                );
            }
        });
    }

    return (
        <div className="tags-container">
            <h1>Tag: {name}</h1>
            <div className="tags-content">{years}</div>
        </div>
    );
}

export default Tags;
