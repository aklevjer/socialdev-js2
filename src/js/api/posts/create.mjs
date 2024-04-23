import { authFetch } from "../index.mjs";
import { API_POSTS_URL } from "../../constants/index.mjs";

export async function createPost(postData) {
  const response = await authFetch(API_POSTS_URL, {
    method: "POST",
    body: JSON.stringify(postData),
  });

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message || "Failed to create post";
  throw new Error(errorMessage);
}
