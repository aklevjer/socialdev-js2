import { authFetch } from "../index.mjs";
import { API_REGISTER_URL } from "../../constants/index.mjs";

export async function register(account) {
  const response = await authFetch(API_REGISTER_URL, {
    method: "POST",
    body: JSON.stringify(account),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Failed to register the account");
}
