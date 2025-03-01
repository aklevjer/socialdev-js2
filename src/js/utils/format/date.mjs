/**
 * Formats a date to the format "Month Day, Year" (i.e. "Jan 1, 1970").
 *
 * @param {string} date - The date to be formatted.
 * @returns {string} The formatted date.
 *
 * @example
 * ```js
 * const formattedDate = formatDate("1970-01-01T12:00:00");
 * console.log(formattedDate); // Output: "Jan 1, 1970"
 * ```
 */
export function formatDate(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
}
