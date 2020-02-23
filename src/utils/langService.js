export const getHrefs = locale => {
  const plHrefs = ["o-mnie", "usługi", "projekty", "kontakt"];
  const enHrefs = ["about-me", "services", "projects", "contact"];

  switch (locale) {
    case "pl":
      return plHrefs;
    case "en":
      return enHrefs;
  }
};

export const changeLang = (lang, path) => {};
