import { authFetch } from "../index.mjs";
import { API_PROFILES_URL } from "../../constants/index.mjs";

export async function getProfileByName(name) {
  const response = await authFetch(`${API_PROFILES_URL}/${name}`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(`Failed to get the profile with the name: ${name}`);
}
