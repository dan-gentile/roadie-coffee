// exports.createPages = async ({ actions, graphql }) => {
//   const result = await graphql(`
//     {
//       allSanityPost {
//         edges {
//           node {
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `);

//   const posts = results.allSanityPost.edges.map(({node}) => node);

//   posts.forEach(post => {
//       actions.createPage({
//           path: post.slug.current,
//           template: //??,
//           context: {
//               slug: post.slug.current
//           }
//       })
//   })
// }
