import { authFetch } from "../index.mjs";
import { API_REGISTER_URL } from "../../constants/index.mjs";

/**
 * Registers a user by sending a POST request to the registration endpoint.
 *
 * @param {Object} account - The user's registration data.
 * @param {string} account.name - The user's name.
 * @param {string} account.email - The user's email.
 * @param {string} account.password - The user's password.
 *
 * @returns {Object} An object containing the user profile and meta data upon successful registration.
 * @throws {Error} If there is an error during the register process.
 */
export async function register(account) {
  try {
    const response = await authFetch(API_REGISTER_URL, {
      method: "POST",
      body: JSON.stringify(account),
    });

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    const errorMessage =
      responseData?.errors[0]?.message || "Failed to register the account";

    throw new Error(errorMessage);
  } catch (error) {
    throw error;
  }
}
