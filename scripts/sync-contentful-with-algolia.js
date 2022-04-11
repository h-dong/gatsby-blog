#!/usr/bin/env node

(async () => {
    const algoliasearch = require("algoliasearch");
    const { createClient } = require("contentful");
    const dotenv = require("dotenv").config();

    const {
        ALGOLIA_APP_ID,
        ALGOLIA_ADMIN_KEY,
        ALGOLIA_INDEX,
        CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_TOKEN,
        CONTENTFUL_HOST,
    } = process.env;

    const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
    const algoliaIndex = algoliaClient.initIndex(ALGOLIA_INDEX);

    const ctfClient = createClient({
        space: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        host: CONTENTFUL_HOST || "cdn.contentful.com",
    });

    try {
        const { items } = await ctfClient.getEntries({
            content_type: "blogPost",
            limit: 1000,
        });

        items.forEach(async (post) => {
            const temp = {
                slug: post.fields.slug,
                title: post.fields.title,
                description: post.fields.description,
                objectID: post.sys.id,
            };
            try {
                const indexedContent = await algoliaIndex.saveObjects([temp]);
            } catch (err) {
                console.error(temp.slug, err);
            }
        });
    } catch (err) {
        console.error(err);
    }
})();
