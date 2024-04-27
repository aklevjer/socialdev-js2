export function formatTags(tagsString) {
  const trimmedString = tagsString.trim();
  return trimmedString.split(" ").filter((tag) => tag);
}
