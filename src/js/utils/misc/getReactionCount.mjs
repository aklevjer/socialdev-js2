export function getReactionCount(reactions) {
  return reactions.reduce((total, reaction) => total + reaction.count, 0);
}
