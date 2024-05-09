/**
 * Formats tags for a post.
 *
 * @param {string} tagsString - The string of tags.
 * @returns {string[]} The formatted tags as an array of strings.
 */
export function formatTags(tagsString) {
  const trimmedString = tagsString.trim();
  const tagsArray = trimmedString.split(" ").filter((tag) => tag);
  return tagsArray.slice(0, 8);
}
