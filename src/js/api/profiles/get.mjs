import { authFetch } from "../index.mjs";
import {
  API_PROFILES_URL,
  API_PARAMS_PROFILES,
  API_POSTS,
  API_PARAMS_POSTS,
} from "../../constants/index.mjs";

/**
 * Gets a profile by it's name by sending a GET request to the profiles endpoint.
 *
 * @param {string} profileName - The name of the profile.
 *
 * @returns {Object} An object containing the profile and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
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

/**
 * Gets all posts made by a profile by sending a GET request to the profiles endpoint.
 *
 * @param {string} profileName - The name of the profile.
 * @param {number} page - The page of results to retrieve.
 * @param {number} limit - The maximum number of results per page.
 *
 * @returns {Object} An object containing the posts and meta data upon successful retrieval.
 * @throws {Error} If there is an error during the retrieval process.
 */
export async function getPostsByProfile(profileName, page, limit) {
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
