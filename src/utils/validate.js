export const validate = (name) => {
  const isValidName = /^[A-Za-z]+ [A-Za-z]+$/.test(name);
  if (!isValidName) {
    return false;
  }
  return true;
};
