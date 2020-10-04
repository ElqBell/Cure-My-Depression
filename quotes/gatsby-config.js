/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/projects/5/preview`,
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-175798206-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cure My Depression`,
        short_name: `Cure Me`,
        start_url: `/`,
        background_color: `#201A1A`,
        theme_color: `#201A1A`,
        display: `standalone`,
        icons: [
          {
            src: `favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `favicon.ico`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
