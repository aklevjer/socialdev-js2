import { authFetch } from "../index.mjs";
import {
  API_PROFILES_URL,
  API_FOLLOW,
  API_UNFOLLOW,
} from "../../constants/index.mjs";

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
