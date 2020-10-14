export const getErrorMessageByFieldName = (errors, fieldName) => {
  const error = errors.find(elem => elem.fieldName === fieldName);
  if (error) return error.errorMessage;
  return null;
};
