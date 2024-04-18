import { authFetch } from "../index.mjs";
import { API_POSTS_URL } from "../../constants/index.mjs";

export async function createPost(postData) {
  const response = await authFetch(API_POSTS_URL, {
    method: "POST",
    body: JSON.stringify(postData),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Failed to create post");
}
