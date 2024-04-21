import * as storage from "../../utils/storage/index.mjs";
import { authFetch } from "../index.mjs";
import { API_LOGIN_URL } from "../../constants/index.mjs";

export async function login(account) {
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
}
