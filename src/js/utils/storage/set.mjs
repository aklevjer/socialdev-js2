/**
 * Stores a key and a value to the browser's local storage.
 *
 * @param {string} key - The key to be stored.
 * @param {string|number|Object} value - The value to be stored.
 */
export function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
