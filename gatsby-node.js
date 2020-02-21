const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const locales = ["pl", "en"];

  createPage({
    path: `/`,
    component: path.resolve("src/components/Home/index.jsx"),
    context: {
      lang: `pl`,
      t: require(`./src/locales/pl/home.json`)
    }
  });

  locales.map(locale => {
    createPage({
      path: `/${locale}/`,
      component: path.resolve("src/components/Home/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/home.json`)
      }
    });
    createPage({
      path: `/${locale}/about-me/`,
      component: path.resolve("src/components/About/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/about.json`)
      }
    });
    createPage({
      path: `/${locale}/services/`,
      component: path.resolve("src/components/Services/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/services.json`)
      }
    });
    createPage({
      path: `/${locale}/projects/`,
      component: path.resolve("src/components/Projects/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/projects.json`)
      }
    });
  });
};
