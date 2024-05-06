import * as storage from "../storage/index.mjs";

export function hasUserReacted(reactions, symbol) {
  const { name } = storage.get("profile");
  return reactions.some(
    (reaction) =>
      reaction.symbol === symbol && reaction.reactors?.includes(name),
  );
}
