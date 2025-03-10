import { authFetch } from "../index.mjs";
import {
  API_PROFILES_URL,
  API_FOLLOW,
  API_UNFOLLOW,
} from "../../constants/index.mjs";

/**
 * Follows or unfollows a profile by sending a PUT request to the follow or unfollow endpoint.
 *
 * @param {string} profileName - The name of the profile to follow/unfollow.
 * @param {boolean} shouldFollow - Whether to follow (true) or unfollow (false).
 *
 * @returns {Object} An object containing the followers and following information aswell as meta data upon successful follow/unfollow.
 * @throws {Error} If there is an error during the follow/unfollow process.
 */
export async function toggleFollowProfile(profileName, shouldFollow) {
  try {
    const endpoint = shouldFollow ? API_FOLLOW : API_UNFOLLOW;
    const response = await authFetch(
      `${API_PROFILES_URL}/${profileName}${endpoint}`,
      {
        method: "PUT",
      },
    );

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message ||
      "Failed to follow/unfollow the profile";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
