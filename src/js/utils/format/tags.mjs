export function formatTags(tagsString) {
  const trimmedString = tagsString.trim();
  const tagsArray = trimmedString.split(" ").filter((tag) => tag);
  return tagsArray.slice(0, 8);
}
