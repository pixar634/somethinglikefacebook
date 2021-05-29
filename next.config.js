// module.exports = {
//     images: {
//         domains: [
//             "links.papareact.com",
//             "platform-lookaside.fbsbx.com",
//             "firebasestorage.googleapis.com",
//             "rebrand.ly"
//         ]
//     },
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.(jpe?g|svg|png)$/,
//             use: ["@svgr/webpack"]
//         });

//         return config;
//     }
// }
const withImages = require('next-images')
module.exports = withImages({
    images: {
        domains: [
            "links.papareact.com",
            "platform-lookaside.fbsbx.com",
            "firebasestorage.googleapis.com",
            "rebrand.ly"
        ]
    },
})
