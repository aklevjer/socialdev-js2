import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_COMMENT } from "../../constants/index.mjs";

export async function createComment(postId, commentData) {
  const response = await authFetch(`${API_POSTS_URL}/${postId}${API_COMMENT}`, {
    method: "POST",
    body: JSON.stringify(commentData),
  });

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message ||
    `Failed to create comment on the post with the id: ${postId}`;
  throw new Error(errorMessage);
}
