export const validate = (email) => {
  //   const isValidName = /^[A-Za-z]+ [A-Za-z]+$/.test(name);
  const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!isValidEmail) {
    return false;
  }
  return true;
};
