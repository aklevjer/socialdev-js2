import { authFetch } from "../index.mjs";
import { API_POSTS_URL, API_PARAMS_POSTS } from "../../constants/index.mjs";

export async function getPostsByTag(tag, page = 1, limit = 50) {
  try {
    const response = await authFetch(
      `${API_POSTS_URL}${API_PARAMS_POSTS}&_tag=${tag}&page=${page}&limit=${limit}`,
    );

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to filter the posts";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
