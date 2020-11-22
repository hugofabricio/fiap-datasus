require('dotenv').config()
const config = require('./site.config')

const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-alias-imports`,
    options: {
      aliases: {
        '@components': `src/components/`,
        '@helpers': `src/components/helpers/`,
        '@shared': `src/components/shared/`,
        '@templates': `src/components/templates/`,
        '@web': `src/components/web/`,
        '@contexts': `src/contexts/`,
        '@hooks': `src/hooks/`,
        '@images': `src/images/`,
        '@mocks': `src/mocks/`,
        '@services': `src/services/`,
        '@styles': `src/styles/`,
        '@svg': `src/svg/`,
        '@utils': `src/utils/`,
        '@views': `src/views/`,
        '@static': `static/`
      }
    }
  },
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      displayName: false
    }
  },
  {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: 'Poppins',
            variants: ['400', '600', '700'],
            fontDisplay: 'swap'
          }
        ]
      },
      formats: ['woff2', 'woff'],
      useMinify: true,
      usePreload: true
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`
    }
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: `${__dirname}/src/svg`
      }
    }
  },
  {
    resolve: `gatsby-plugin-algolia-search`,
    options: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_SEARCH_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME
    }
  },
  `gatsby-plugin-preload-link-crossorigin`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `buscasus`,
      short_name: `buscasus`,
      start_url: `/`,
      background_color: `#272E79`,
      theme_color: `#272E79`,
      display: `minimal-ui`,
      icon: `src/images/icon.svg`
    }
  }
]

module.exports = {
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    author: config.siteMetadata.author,
    ogImage: config.siteMetadata.ogImage,
    siteUrl: config.siteMetadata.siteUrl
  },
  plugins
}
