import { authFetch } from "../index.mjs";
import { API_REGISTER_URL } from "../../constants/index.mjs";

export async function register(account) {
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
}
