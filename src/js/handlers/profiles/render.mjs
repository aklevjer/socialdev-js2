import { createProfileTemplate } from "../../templates/profile/index.mjs";

/**
 * Renders a profile to the DOM.
 *
 * @param {Object} profileData - The data of the profile.
 * @param {HTMLElement} parentElement - The element to append the profile to.
 */
export function renderProfile(profileData, parentElement) {
  const profileClone = createProfileTemplate(profileData);
  parentElement.append(profileClone);
}
