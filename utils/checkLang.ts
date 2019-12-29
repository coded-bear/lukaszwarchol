export const checkLang = async (lang: string) => {
  const langsList: string[] = ["pl", "en"];
  if (langsList.includes(lang)) return lang;
  return "pl";
};
