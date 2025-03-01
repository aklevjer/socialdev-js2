/**
 * Removes an entry from the browser's local storage using the specified key.
 *
 * @param {string} key - The key used to identify the entry to be removed.
 */
export function remove(key) {
  localStorage.removeItem(key);
}
