module.exports = {
  siteMetadata: {
    title: `Łukasz Warchoł`,
    description: `JavaScript Developer, Software Developer, Programista, Programista Warszawa`,
    author: `Łukasz Warchoł`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Łukasz Warchoł`,
        short_name: `Łukasz Warchoł`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:400,700`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/`,
          `/pl/`,
          `/pl/o-mnie/`,
          `/pl/uslugi/`,
          `/pl/projekty/`,
          `/pl/kontakt/`,
          `/en/`,
          `/en/about-me/`,
          `/en/services/`,
          `/en/projects/`,
          `en/contact/`
        ],
        workboxConfig: {
          importWorkboxFrom: `cdn`
        }
      }
    }
  ]
};
