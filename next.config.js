const withImages = require("next-images");

module.exports = withImages({
  assetPrefix: "http://localhost:3000",
  inlineImageLimit: 8192,
  useFileSystemPublicRoutes: false,

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
  },

  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = { "/": { page: "/home" } };
    const locales = ["pl", "en"];

    locales.forEach(locale => {
      paths[`/${locale}`] = { page: "/home", query: { locale } };
      paths[`/${locale}/about-me`] = { page: "/about", query: { locale } };
      paths[`/${locale}/services`] = { page: "/services", query: { locale } };
      paths[`/${locale}/projects`] = { page: "/projects", query: { locale } };
      paths[`/${locale}/contact`] = { page: "/contact", query: { locale } };
    });

    return paths;
  }
});
