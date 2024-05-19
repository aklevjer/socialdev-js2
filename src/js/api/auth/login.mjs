import * as storage from "../../utils/storage/index.mjs";
import { authFetch } from "../index.mjs";
import { API_LOGIN_URL } from "../../constants/index.mjs";

/**
 * Logs in the user by sending a POST request to the login endpoint.
 * Stores user information in local storage upon successful login.
 *
 * @param {Object} account - The account data.
 * @param {string} account.email - The user's email.
 * @param {string} account.password - The user's password.
 *
 * @returns {Object} The user profile data upon successful login.
 * @throws {Error} If there is an error during the login process.
 */
export async function login(account) {
  try {
    const response = await authFetch(API_LOGIN_URL, {
      method: "POST",
      body: JSON.stringify(account),
    });

    const responseData = await response.json();

    if (response.ok) {
      const { accessToken, ...profile } = responseData.data;

      storage.set("accessToken", accessToken);
      storage.set("profile", profile);

      return profile;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to login to the account";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
