export const projectsCategoriesList = ["All", "Web Development", "Desktop Development", "Mobile Development", "UX/UI Design"];

export const getErrorMessageByFieldName = (errors, fieldName) => {
  const error = errors.find(elem => elem.fieldName === fieldName);
  if (error) return error.errorMessage;
  return null;
};
