import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_REACT } from "../../constants/index.mjs";

export async function reactToPost(postId) {
  try {
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
      responseData?.errors[0]?.message || "Failed to like the post";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
