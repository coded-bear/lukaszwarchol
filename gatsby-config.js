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
        start_url: `/`,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:400,700`],
        display: "swap"
      }
    },
    `gatsby-plugin-recaptcha`
  ]
};
