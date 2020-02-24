export const langsList = ["pl", "en"];

export const getHrefs = locale => {
  const plHrefs = ["o-mnie", "uslugi", "projekty", "kontakt"];
  const enHrefs = ["about-me", "services", "projects", "contact"];

  switch (locale) {
    case "en":
      return enHrefs;
    default:
      return plHrefs;
  }
};

export const changePath = (lang, path) => {
  if (path === "/") return `/${lang}/`;

  const splitPath = path.split("/");
  const actualHrefs = getHrefs(splitPath[1]);
  const actualHref = splitPath[2];
  const newHrefs = getHrefs(lang);
  const hrefPosition = actualHrefs.indexOf(actualHref);

  if (hrefPosition === -1) return `/${lang}/`;
  return `/${lang}/${newHrefs[hrefPosition]}/`;
};
