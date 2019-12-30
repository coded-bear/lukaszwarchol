const checkLang = async (lang: string): Promise<string> => {
  const langsList: string[] = ["pl", "en"];
  if (langsList.includes(lang)) return lang;
  return "pl";
};

export const getLang = async (asPath: string | undefined): Promise<string> => {
  if (typeof asPath !== "undefined") return await checkLang(asPath.split("/")[1]);
  return "pl";
};
