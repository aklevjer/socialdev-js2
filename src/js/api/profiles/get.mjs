import { authFetch } from "../index.mjs";
import {
  API_PROFILES_URL,
  API_PARAMS_PROFILES,
  API_POSTS,
  API_PARAMS_POSTS,
} from "../../constants/index.mjs";

export async function getProfileByName(profileName) {
  const response = await authFetch(
    `${API_PROFILES_URL}/${profileName}${API_PARAMS_PROFILES}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message ||
    `Failed to get the profile with the name: ${profileName}`;
  throw new Error(errorMessage);
}

export async function getPostsByProfile(profileName) {
  const response = await authFetch(
    `${API_PROFILES_URL}/${profileName}${API_POSTS}${API_PARAMS_POSTS}`,
  );

  const responseData = await response.json();

  if (response.ok) {
    return responseData;
  }

  const errorMessage =
    responseData?.errors[0]?.message ||
    `Failed to get posts for profile with the name: ${profileName}`;
  throw new Error(errorMessage);
}
