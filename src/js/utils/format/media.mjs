export function formatMedia(postTitle, mediaUrl) {
  return mediaUrl
    ? {
        url: mediaUrl,
        alt: `Image from ${postTitle}`,
      }
    : null;
}
