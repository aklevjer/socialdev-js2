import { authFetch } from "../index.mjs";
import { API_POSTS_URL } from "../../constants/index.mjs";

export async function updatePost(postId, postData) {
  const response = await authFetch(`${API_POSTS_URL}/${postId}`, {
    method: "PUT",
    body: JSON.stringify(postData),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(`Failed to update the post with the id: ${postId}`);
}
