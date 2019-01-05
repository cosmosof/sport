module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
        modifyVars: {
          '@body-background' : '#E4DCDC',
          '@layout-body-background': `#E4DCDC`,
          '@layout-header-background': '#E4DCDC',
          '@layout-body-background': '#E4DCDC',
          '@layout-footer-background': '#E4DCDC',
          '@item-active-bg': '#E4DCDC',
          '@menu-highlight-color': '#5D5A5A',
          '@slider-track-background-color': '#948D8D',
          '@slider-track-background-color-hover': '#5D5A5A',
          '@slider-handle-color': '#948D8D',
          '@slider-handle-color-hover': '#5D5A5A',
          '@slider-handle-color-focus': 'tint(#948D8D, 20%)',
          '@slider-handle-color-focus-shadow': 'fade(#948D8D, 20%)',
          '@slider-handle-color-tooltip-open': '#948D8D',
          '@slider-dot-border-color': '#948D8D',
          '@slider-dot-border-color-active': '#5D5A5A',
          '@input-hover-border-color': '#B8B2B2',
          '@outline-color': '#B8B2B2'

        },
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
