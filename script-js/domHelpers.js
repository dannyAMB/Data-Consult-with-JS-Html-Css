export function addClass(el, className) {
    if (el && !el.classList.contains(className)) {
      el.classList.add(className);
    }
  }
  
  export function removeClass(el, className) {
    if (el && el.classList.contains(className)) {
      el.classList.remove(className);
    }
  }
  
  export function toggleClass(el, className) {
    if (el) {
      el.classList.toggle(className);
    }
  }
