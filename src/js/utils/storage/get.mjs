/**
 * Gets a value from the browser's local storage using the specified key.
 *
 * @param {string} key - The key used to retrieve the stored value.
 * @returns {string|number|Object|null} The retrieved value, or null if the key doesn't exist or an error occurs.
 */
export function get(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}
