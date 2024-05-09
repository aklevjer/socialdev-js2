/**
 * Clears an HTML element by removing all children inside.
 *
 * @param {HTMLElement} element - The element to be cleared.
 * @example
 * ```js
 * // Clear an element with the ID "myElement"
 * const myElement = document.querySelector("#myElement");
 * clearElement(myElement);
 * ```
 */
export function clearElement(element) {
  while (element.firstChild) {
    element.firstChild.remove();
  }
}
