import * as storage from "../utils/storage/index.mjs";
import { API_KEY } from "../constants/index.mjs";

export function headers(hasBody = false) {
  const headers = new Headers();
  const accessToken = storage.get("accessToken");

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (hasBody) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
}
