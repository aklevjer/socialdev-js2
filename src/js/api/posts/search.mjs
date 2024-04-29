import { authFetch } from "../index.mjs";
import { API_SEARCH_URL, API_PARAMS_POSTS } from "../../constants/index.mjs";

export async function searchPosts(query, page = 1, limit = 50) {
  const response = await authFetch(
    `${API_SEARCH_URL}${API_PARAMS_POSTS}&q=${query}&page=${page}&limit=${limit}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message ||
    `Failed to get search results for the query: ${query}`;
  throw new Error(errorMessage);
}
