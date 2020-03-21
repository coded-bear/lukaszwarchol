module.exports = {
  siteMetadata: {
    title: `Łukasz Warchoł`,
    description: `JavaScript Developer, Software Developer, Programista, Programista Warszawa`,
    author: `Łukasz Warchoł`,
    siteUrl: `localhost:9000`
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
        icon: `src/images/favicon.ico`,
        crossOrigin: `use-credentials`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/`,
          `/pl/`,
          `/pl/o-mnie/`,
          `/pl/uslugi/`,
          `/pl/projekty/`,
          `/pl/projekty/swym/`,
          `/pl/projekty/droplead/`,
          `/pl/kontakt/`,
          `/pl/polityka-prywatnosci/`,
          `/en/`,
          `/en/about-me/`,
          `/en/services/`,
          `/en/projects/`,
          `/en/projects/swym/`,
          `/en/projects/droplead/`,
          `/en/contact/`,
          `/en/privacy-policy/`
        ],
        workboxConfig: {
          importWorkboxFrom: `cdn`
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [],
        query: `{
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7
            };
          })
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        configFile: `robots-txt.config.js`
      }
    }
  ]
};
