// https://regex101.com/r/OGH4W8/1
export const validateEmail = (email: string) => {
  var regEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return regEx.test(email);
}
