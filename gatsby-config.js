require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `MyFE`,
    author: `Vitaliy Poliansky`,
    description: `Personal blog by Vitaliy Poliansky. How JS changes my life.`,
    siteUrl: `https://www.myfe.site`,
    social: {
      linkedin: `vitaliy-polyanskiy-6930b515b`,
      instagram: `vitaliypolyansky`
    }
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷'
            }
          },
          `gatsby-remark-copy-linked-files`,
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank'
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-137370242-1`,
        head: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MyFE`,
        short_name: `MyFE`,
        start_url: `/`,
        background_color: `#3161a3`,
        theme_color: `#3161a3`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
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
        }`,
        serialize: ({ site, allSitePage }) => {
          const date = new Date()
          const yyyy = date.getFullYear()
          let mm = date.getMonth() + 1
          mm = mm < 10 ? '0' + mm : mm
          let dd = date.getDate()
          dd = dd < 10 ? '0' + dd : dd
          return allSitePage.edges.map(edge => {
            let nodePath = edge.node.path
            nodePath = nodePath.endsWith('/') ? nodePath.slice(0, -1) : nodePath
            return {
              url: site.siteMetadata.siteUrl + nodePath,
              lastmod: `${yyyy}-${mm}-${dd}`,
              changefreq: `daily`,
              priority: 0.8
            }
          })
        }
      }
    },
    `gatsby-plugin-netlify`
  ]
}
