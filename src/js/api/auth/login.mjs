import * as storage from "../../utils/storage/index.mjs";
import { authFetch } from "../index.mjs";
import { API_LOGIN_URL } from "../../constants/index.mjs";

export async function login(account) {
  const response = await authFetch(API_LOGIN_URL, {
    method: "POST",
    body: JSON.stringify(account),
  });

  if (response.ok) {
    const responseData = await response.json();
    const { accessToken, ...profile } = responseData.data;

    storage.set("accessToken", accessToken);
    storage.set("profile", profile);

    return profile;
  }

  throw new Error("Failed to login to the account");
}
