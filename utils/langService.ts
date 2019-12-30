export const langsList: string[] = ["pl", "en"];

const checkLang = async (lang: string): Promise<string> => {
  if (langsList.includes(lang)) return lang;
  return langsList[0];
};

export const getLang = async (asPath: string | undefined): Promise<string> => {
  if (typeof asPath !== "undefined") return await checkLang(asPath.split("/")[1]);
  return langsList[0];
};

export const changePath = (asPath: string, targetLang: string) => {
  const path: string[] = asPath.split("/");
  const lang: string = path[1];
  const existLang: boolean = langsList.includes(lang);

  if (existLang) path[1] = targetLang;
  else path[0] = "/" + targetLang;

  return path.join("/");
};
