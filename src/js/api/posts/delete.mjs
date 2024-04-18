import { authFetch } from "../index.mjs";
import { API_POSTS_URL } from "../../constants/index.mjs";

export async function removePost(postId) {
  const response = await authFetch(`${API_POSTS_URL}/${postId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    return { message: `Post with id: ${postId} successfully deleted` };
  }

  throw new Error(`Failed to delete the post with the id: ${postId}`);
}
