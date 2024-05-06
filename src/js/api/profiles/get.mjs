import { authFetch } from "../index.mjs";
import {
  API_PROFILES_URL,
  API_PARAMS_PROFILES,
  API_POSTS,
  API_PARAMS_POSTS,
} from "../../constants/index.mjs";

export async function getProfileByName(profileName) {
  try {
    const response = await authFetch(
      `${API_PROFILES_URL}/${profileName}${API_PARAMS_PROFILES}`,
    );

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to retrieve the profile";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}

export async function getPostsByProfile(profileName, page = 1, limit = 50) {
  try {
    const response = await authFetch(
      `${API_PROFILES_URL}/${profileName}${API_POSTS}${API_PARAMS_POSTS}&page=${page}&limit=${limit}`,
    );

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message ||
      "Failed to retrieve the posts for the profile";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
