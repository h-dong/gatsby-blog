import React from "react";
import { Link } from "gatsby";
import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
    SearchBox,
    Hits,
    connectHighlight,
} from "react-instantsearch-dom";
import { FaRegFileAlt } from "react-icons/fa";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import algoliaIcon from "../assets/search-by-algolia-light-background.svg";

const searchClient = algoliasearch(
    "ZMVW6NRL6A",
    "bae0d5d5589e65645917fe290105127b"
);

const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
    const parsedHit = highlight({
        highlightProperty: "_highlightResult",
        attribute,
        hit,
    });

    return (
        <div>
            {parsedHit.map((part, index) =>
                part.isHighlighted ? (
                    <mark key={index}>{part.value}</mark>
                ) : (
                    part.value
                )
            )}
        </div>
    );
});

const Hit = ({ hit }) => (
    <Link to={`/${hit.slug}`}>
        <h3 className="hit">
            <FaRegFileAlt /> <CustomHighlight attribute="title" hit={hit} />
        </h3>
    </Link>
);

const SearchPage = () => (
    <Layout>
        <SEO title={"Search"} />
        <div id="search" className="page">
            <InstantSearch
                searchClient={searchClient}
                indexName="blog_hao_dev_search"
            >
                <SearchBox />
                <div className="algolia-icon">
                    <img src={algoliaIcon} alt="search by algolia icon" />
                </div>
                <Hits hitComponent={Hit} />
            </InstantSearch>
        </div>
    </Layout>
);

export default SearchPage;
