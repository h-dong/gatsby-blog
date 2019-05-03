# gatsby-starter-default
The default Gatsby starter.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
gatsby develop
```

## Setting up Contentful

Create a `.env` file on the root level, then add the variables below:

### For Production

```
CONTENTFUL_ACCESS_TOKEN=xxxxxxxxxxx
CONTENTFUL_SPACE_ID=xxxxx
# CONTENTFUL_HOST= // comment out or remove, code defaults to production host
```

### For Preview


```
CONTENTFUL_ACCESS_TOKEN=xxxxxxxxxxx
CONTENTFUL_SPACE_ID=xxxxx
CONTENTFUL_HOST=preview.contentful.com
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
