// module.exports = {
//   siteMetadata: {
//     title: 'Gatsby + Netlify CMS Starter',
//   },
//   plugins: [
//     'gatsby-transformer-yaml',
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {
//         path: `${__dirname}/src/options`,
//         name: 'options',
//       },
//     },
//     'gatsby-plugin-react-helmet',
//     'gatsby-plugin-sass',
    
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {  
//         path: `${__dirname}/src/pages`,
//         name: 'pages',
//       },
//     },
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {
//         path: `${__dirname}/src/img`,
//         name: 'images',
//       },
//     },
//     'gatsby-transformer-sharp',
//     {
//       resolve: 'gatsby-transformer-remark',
//       options: {
//         plugins: [],
//       },
//     },
//     {
//       resolve: 'gatsby-plugin-netlify-cms',
//       options: {
//         modulePath: `${__dirname}/src/cms/cms.js`,
//       },
//     },
//     'gatsby-plugin-sharp',
//     'gatsby-plugin-netlify', // make sure to keep it last in the array
//   ],
// }

module.exports = {
  siteMetadata: {
    title: `Cup of Data`,
    author: `Cup of Data Team`,
    authorLink: `https://github.com/cupofdata`,
  },
  plugins: [
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/options`,
        name: 'options',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `static/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`, `gatsby-remark-copy-linked-files`],
      },
    },
    // {
    //   resolve: `gatsby-plugin-segment`,
    //   options: {
    //     writeKey: `${process.env.SEGMENT_PROD_WRITE_KEY}`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: `./content/favicon.png`,
    //     injectHTML: true,
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       firefox: true,
    //       twitter: false,
    //       yandex: false,
    //       windows: false,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        exclude: /(node_modules|cache|public)/,
        test: /\.js$|\.jsx$/,
      },
    },
    // `gatsby-plugin-babel-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    // `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1280,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
  ].filter(Boolean),
}
