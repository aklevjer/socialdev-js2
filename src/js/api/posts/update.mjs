import { authFetch } from "../index.mjs";
import { API_POSTS_URL } from "../../constants/index.mjs";

export async function updatePost(postId, postData) {
  try {
    const response = await authFetch(`${API_POSTS_URL}/${postId}`, {
      method: "PUT",
      body: JSON.stringify(postData),
    });

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to edit the post";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
