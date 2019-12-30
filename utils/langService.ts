export const langsList: string[] = ["pl", "en"];

const checkLang = async (lang: string): Promise<string> => {
  if (langsList.includes(lang)) return lang;
  return langsList[0];
};

export const getLang = async (asPath: string | undefined): Promise<string> => {
  if (typeof asPath !== "undefined") return await checkLang(asPath.split("/")[1]);
  return langsList[0];
};
