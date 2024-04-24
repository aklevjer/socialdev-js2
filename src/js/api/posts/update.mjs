import { authFetch } from "../index.mjs";
import { API_POSTS_URL } from "../../constants/index.mjs";

export async function updatePost(postId, postData) {
  const response = await authFetch(`${API_POSTS_URL}/${postId}`, {
    method: "PUT",
    body: JSON.stringify(postData),
  });

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message ||
    `Failed to update the post with the id: ${postId}`;
  throw new Error(errorMessage);
}
