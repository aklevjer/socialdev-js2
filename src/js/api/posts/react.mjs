import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_REACT } from "../../constants/index.mjs";

export async function reactToPost(postId) {
  const response = await authFetch(
    `${API_POSTS_URL}/${postId}${API_REACT}/❤️`,
    {
      method: "PUT",
    },
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message ||
    `Failed to react the post with the id: ${postId}`;
  throw new Error(errorMessage);
}
