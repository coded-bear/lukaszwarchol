const withImages = require("next-images");

module.exports = withImages({
  assetPrefix: "http://localhost:3000",
  inlineImageLimit: 16384,
  useFileSystemPublicRoutes: false,
  // exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/home" },
      "/about": { page: "/about" },
      "/services": { page: "/services" },
      "/projects": { page: "/projects" },
      "/contact": { page: "/contact" },
      "/privacy-policy": { page: "/privacyPolicy" }
    };
  },
  webpack: config => {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries["main.js"]) {
        entries["main.js"].unshift("./polyfills.js");
      }
      return entries;
    };
    return config;
  }
});
