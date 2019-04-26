#!/usr/bin/env node

(async () => {
    const algoliasearch = require('algoliasearch');
    const { createClient } = require('contentful');
    const removeMd = require('remove-markdown');
    const removeSW = require('stopword');


    const {
        ALGOLIA_APP_ID,
        ALGOLIA_ADMIN_KEY,
        ALGOLIA_INDEX,
        CTF_SPACE_ID,
        CONTENTFUL_ACCESS_TOKEN,
    } = process.env;

    const algoliaClient = algoliasearch(
        ALGOLIA_APP_ID,
        ALGOLIA_ADMIN_KEY
    );
    const algoliaIndex = algoliaClient.initIndex(ALGOLIA_INDEX);

    const ctfClient = createClient({
        space: CTF_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN
    });

    try {
        const { items } = await ctfClient.getEntries({
            content_type: 'blogPost',
            limit: 1000
        });

        const posts = items.map(post => {
            const removeMarkdown = removeMd(post.fields.body)
            const removeStopWords = removeSW.removeStopwords(removeMarkdown.split(' '));
            const body = removeStopWords.join(' ');

            return {
                title: post.fields.title,
                description: post.fields.description,
                body,
                objectID: post.sys.id
            }
        });

        const indexedContent = await algoliaIndex.addObjects(posts);

        console.log('Indexed Content:', indexedContent);
    } catch (err) {
        console.log(Object.keys(err));
        console.error(err.name, err.message);
    }
})();

