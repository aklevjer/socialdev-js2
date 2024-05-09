/**
 * Gets the reaction count from an array of reactions.
 *
 * @param {object[]} reactions - The array of reactions to count.
 * @returns {number} The reaction count.
 */
export function getReactionCount(reactions) {
  return reactions.reduce((total, reaction) => total + reaction.count, 0);
}
