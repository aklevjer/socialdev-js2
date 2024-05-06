import { authFetch } from "../index.mjs";
import { API_PROFILES_URL } from "../../constants/index.mjs";

export async function updateProfile(profileName, profileData) {
  try {
    const response = await authFetch(`${API_PROFILES_URL}/${profileName}`, {
      method: "PUT",
      body: JSON.stringify(profileData),
    });

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to edit your profile";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
