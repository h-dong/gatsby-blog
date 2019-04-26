import React from 'react'
import Layout from "../components/layout"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, connectHighlight } from 'react-instantsearch-dom';

const searchClient = algoliasearch('ZMVW6NRL6A', 'bae0d5d5589e65645917fe290105127b');

const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
    const parsedHit = highlight({
        highlightProperty: '_highlightResult',
        attribute,
        hit
    });

    return (
        <div>
            {parsedHit.map(
                part => (part.isHighlighted ? <mark>{part.value}</mark> : part.value)
            )}
        </div>
    );
});

const Hit = ({ hit }) => (
    <h3>
        <CustomHighlight attribute="title" hit={hit} />
    </h3>
);

const SearchPage = () => (
    <Layout>
        <div id="search" className="page">
            <InstantSearch searchClient={searchClient} indexName="prod_blog_search">
                <SearchBox />
                <Hits hitComponent={Hit} />
            </InstantSearch>
        </div>
    </Layout>
)

export default SearchPage
