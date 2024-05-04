export function hasReacted(reactions, profileName, symbol) {
  return reactions.some(
    (reaction) =>
      reaction.symbol === symbol && reaction.reactors?.includes(profileName),
  );
}
