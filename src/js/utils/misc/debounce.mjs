/**
 * Debounces a function by delaying the calling of the provided function.
 *
 * @param {function} func - The function to be debounced.
 * @param {number} [timeout = 300] - The time in milliseconds to wait before calling the provided function.
 *
 * @returns {function} A debounced version of the provided function.
 */
export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
}
