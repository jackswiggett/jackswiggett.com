import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `jackswiggett.com`,
    siteUrl: `https://www.jackswiggett.com`,
    description: `Jack Swiggett is a software engineer based in Seattle, WA`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`mulish\:200,300,400,500`],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/favicon.png',
      },
    },
  ],
};

export default config;
