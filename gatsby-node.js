const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const locales = ["pl", "en"];

  locales.map(locale => {
    createPage({
      path: `/${locale}/`,
      component: path.resolve("src/components/Home/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/home.json`)
      }
    });
  });
};
