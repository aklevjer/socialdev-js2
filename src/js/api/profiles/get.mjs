import { authFetch } from "../index.mjs";
import {
  API_PROFILES_URL,
  API_POSTS,
  API_PARAMS_POSTS,
} from "../../constants/index.mjs";

export async function getProfileByName(name) {
  const response = await authFetch(`${API_PROFILES_URL}/${name}`);

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message ||
    `Failed to get the profile with the name: ${name}`;
  throw new Error(errorMessage);
}

export async function getPostsByProfile(name) {
  const response = await authFetch(
    `${API_PROFILES_URL}/${name}${API_POSTS}${API_PARAMS_POSTS}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message ||
    `Failed to get posts for profile with the name: ${name}`;
  throw new Error(errorMessage);
}
