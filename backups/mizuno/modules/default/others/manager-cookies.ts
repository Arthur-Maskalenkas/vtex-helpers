// funções responsaveis por adicionar e remover cookies

export function getCookie() {
  const cookieName = 'isRegistered'

  const value = "; " + document.cookie;
  const parts = value.split("; " + cookieName + "=");
  if (parts.length >= 2) {
    return true;
  }
  return false;
}


export function setCookie() {
  const cname = 'isRegistered'

  document.cookie = cname + "=" + ";path=/";
}
