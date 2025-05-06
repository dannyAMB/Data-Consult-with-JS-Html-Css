export function isEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  
  export function isEmpty(str) {
    return !str || str.trim() === '';
  }
  
  export function isValidPassword(pw) {
    return pw.length >= 8;
  }

  export function existsSelector(selector) {
    return document.querySelector(selector) !== null;
  }