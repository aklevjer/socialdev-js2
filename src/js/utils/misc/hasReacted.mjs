import * as storage from "../storage/index.mjs";

/**
 * Checks if the logged-in user has reacted to a post with the provided symbol.
 *
 * @param {object[]} reactions - The array of reactions check.
 * @param {string} symbol - The symbol to check for.
 *
 * @returns {boolean} Indicates whether or not the logged-in user has reacted to the post.
 */
export function hasUserReacted(reactions, symbol) {
  const { name } = storage.get("profile");
  return reactions.some(
    (reaction) =>
      reaction.symbol === symbol && reaction.reactors?.includes(name),
  );
}
