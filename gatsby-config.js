module.exports = {
  siteMetadata: {
    title: `Minako Williams`,
    landingMessage: `What infinite possibilities can we discover or manifest as real as life itself?`,
    siteUrl: `https://minakoiw.github.io`
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "portfolioImages",
      "path": "./portfolio-pieces/images/"
    },
    __key: "portfolioImages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "events",
      "path": `${__dirname}/events`
    },
    __key: "events"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "portfolioPieces",
      "path": `${__dirname}/portfolio-pieces`
    },
    __key: "portfolioPieces"
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [
        'Merriweather',
        'Gloria Hallelujah'
      ]
    } 
  }]
};