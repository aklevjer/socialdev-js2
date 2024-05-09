/**
 * Formats a media object for a post.
 *
 * @param {string} postTitle - The title of the post.
 * @param {string} mediaUrl - The URL of the media for the post.
 *
 * @returns {object|null} The formatted media object with URL and alt text, or null if mediaUrl is empty.
 */
export function formatMedia(postTitle, mediaUrl) {
  return mediaUrl
    ? {
        url: mediaUrl,
        alt: `Image from ${postTitle}`,
      }
    : null;
}
