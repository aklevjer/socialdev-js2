import { reactToPost } from "../../api/posts/index.mjs";
import { hasUserReacted, getReactionCount } from "../../utils/misc/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Handles toggling the reaction to a post.
 *
 * @param {Event} event - The event object representing the like button click event.
 * @param {number} postId - The id of the post.
 */
export async function handleReactToPost(event, postId) {
  const likeBtn = event.currentTarget;
  const likeBtnIcon = likeBtn.firstElementChild;
  const likeBtnText = likeBtn.lastElementChild;

  try {
    const reaction = await reactToPost(postId);
    const hasLiked = hasUserReacted(reaction.data.reactions, "❤️");

    // Like icon
    likeBtnIcon.classList.toggle("bi-heart-fill", hasLiked);
    likeBtnIcon.classList.toggle("text-red-400", hasLiked);
    likeBtnIcon.classList.toggle("bi-heart", !hasLiked);

    // Like count
    const likeCount = getReactionCount(reaction.data.reactions);
    likeBtnText.textContent = `${likeCount} Likes`;
  } catch (error) {
    showAlert("error", error.message);
  }
}
