module.exports = {
  siteMetadata: {
    title: `Jack Swiggett`,
    description: `Jack Swiggett is a software engineer based in Seattle, WA`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `muli\:200,300`
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
  ],
}
