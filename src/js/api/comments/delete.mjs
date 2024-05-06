import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_COMMENT } from "../../constants/index.mjs";

export async function removeComment(postId, commentId) {
  const response = await authFetch(
    `${API_POSTS_URL}/${postId}${API_COMMENT}/${commentId}`,
    {
      method: "DELETE",
    },
  );

  if (response.ok) {
    return { message: `Comment with id: ${commentId} successfully deleted` };
  }

  const responseData = await response.json();

  const errorMessage =
    responseData?.errors[0]?.message ||
    `Failed to delete the comment with the id: ${commentId}`;
  throw new Error(errorMessage);
}
