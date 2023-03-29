/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  siteMetadata: {
    title: `Chronic Conditions Center`,
    description: `Located in Pittsburgh, Chronic Conditions Center provides solutions to neuropathy, knee pain and spinal problems. Call us today for a free consultation.`,
    author: `Chronic Conditions Center`,
    siteUrl: `https://chronicpa.com`,
    keywords: `Pittsburgh Chiropractors, pgh chiropractors, Chiropractors in Pittsburgh, Best Chiropractors in Pittsburgh, Chiropractor near me, Chiropractic care, Chiropractic clinic, Chiropractic Clinic Pittsburgh, Chiropractor Mt Lebanon, Chiropractor 15228`,
  },
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `http://admin.chronicpa.com/graphql`,
      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    /* RSS feed setup */
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWpPost } }) => {
              return allWpPost.edges.map(edge => {
                return Object.assign({}, edge.node.seo, {
                  description: edge.node.seo.metaDesc,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.content }],
                })
              })
            },
            query: `
              {
                allWpPost(sort: {fields: date, order: DESC}) {
                  edges {
                    node {
                      seo {
                        title
                        metaDesc
                      }
                      content
                      date
                      slug
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Chronic Conditions Center RSS Feed",
          },
        ],
      },
    },
    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preact`,
    // "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronic Conditions Center`,
        short_name: `CCC App`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3ab1ba`,
        display: `minimal-ui`,
        icon: `content/assets/ccc-favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://chronicpa.com/',
        sitemap: 'https://chronicpa.com/sitemap/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://chronicpa.com/`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TBP8T4T",
        // defaultDataLayer: { platform: "gatsby" },
      },
    },
    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    `gatsby-plugin-offline`,
  ],
}
