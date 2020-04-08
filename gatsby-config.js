/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
plugins: [
  'gatsby-plugin-sass',
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "files",
      path: `${__dirname}/src/markdown`
    },
  },
]

}

// module.exports = {

//   siteMetadata: {
//       title: 'Gatsby blog',
//   },
  
//   plugins: [
//       'gatsby-plugin-sass',

//       {
//           resolve: 'gatsby-source-filesystem',
//           options: {
//             name: 'files',
//             path: `${__dirname}/src/markdown`,
//           },
//       },

//       'gatsby-transformer-remark'
      
//   ]

// }
