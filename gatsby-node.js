const path = require("path");

const getHrefs = locale => {
  const plHrefs = ["o-mnie", "uslugi", "projekty", "kontakt", "polityka-prywatnosci"];
  const enHrefs = ["about-me", "services", "projects", "contact", "privacy-policy"];

  switch (locale) {
    case "pl":
      return plHrefs;
    case "en":
      return enHrefs;
  }
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const locales = ["pl", "en"];

  createPage({
    path: `/`,
    component: path.resolve("src/components/Home/index.jsx"),
    context: {
      lang: locales[0],
      t: require(`./src/locales/${locales[0]}/home.json`),
      layoutT: require(`./src/locales/${locales[0]}/layout.json`)
    }
  });

  locales.map(locale => {
    createPage({
      path: `/${locale}/`,
      component: path.resolve("src/components/Home/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/home.json`),
        layoutT: require(`./src/locales/${locale}/layout.json`)
      }
    });
    createPage({
      path: `/${locale}/${getHrefs(locale)[0]}/`,
      component: path.resolve("src/components/About/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/about.json`),
        layoutT: require(`./src/locales/${locale}/layout.json`)
      }
    });
    createPage({
      path: `/${locale}/${getHrefs(locale)[1]}/`,
      component: path.resolve("src/components/Services/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/services.json`),
        layoutT: require(`./src/locales/${locale}/layout.json`)
      }
    });
    createPage({
      path: `/${locale}/${getHrefs(locale)[2]}/`,
      component: path.resolve("src/components/Projects/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/projects.json`),
        layoutT: require(`./src/locales/${locale}/layout.json`)
      }
    });
    createPage({
      path: `/${locale}/${getHrefs(locale)[3]}/`,
      component: path.resolve("src/components/Contact/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/contact.json`),
        layoutT: require(`./src/locales/${locale}/layout.json`)
      }
    });
    createPage({
      path: `/${locale}/${getHrefs(locale)[4]}/`,
      component: path.resolve("src/components/PrivacyPolicy/index.jsx"),
      context: {
        lang: locale,
        t: require(`./src/locales/${locale}/privacyPolicy.json`),
        layoutT: require(`./src/locales/${locale}/layout.json`)
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    };
  }
};
