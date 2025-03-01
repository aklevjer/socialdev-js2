/**
 * Sorts an array of comments by creation date in descending order.
 *
 * @param {Object[]} comments - The array of comments to be sorted.
 * @returns {Object[]} The sorted array of comments.
 */
export function sortCommentsByDate(comments) {
  return [...comments].sort(
    (a, b) => new Date(b.created) - new Date(a.created),
  );
}
