import { createProfileTemplate } from "../../templates/profile/index.mjs";

export function renderProfile(profileData, parentElement) {
  const profileClone = createProfileTemplate(profileData);
  parentElement.append(profileClone);
}
