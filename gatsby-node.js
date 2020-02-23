const path = require("path");

const getHrefs = locale => {
  const plHrefs = ["o-mnie", "usługi", "projekty", "kontakt"];
  const enHrefs = ["about-me", "services", "projects", "contact"];

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
      lang: `pl`,
      t: require(`./src/locales/pl/home.json`),
      layoutT: require(`./src/locales/pl/layout.json`)
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
  });
};
