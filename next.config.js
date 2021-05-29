module.exports = {
    images: {
        domains: [
            "links.papareact.com",
            "platform-lookaside.fbsbx.com",
            "firebasestorage.googleapis.com",
            "rebrand.ly"
        ]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
}