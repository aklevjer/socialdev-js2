import { DEFAULT_BANNER_URL } from "../../constants/index.mjs";

/**
 * Updates the banner within a profile template.
 *
 * @param {DocumentFragment} profileClone - The cloned profile template containing the banner.
 * @param {Object} profileData - The data of the profile.
 */
export function updateProfileBanner(profileClone, profileData) {
  const profileBanner = profileClone.querySelector(".profile-banner");

  const { name, banner } = profileData;

  profileBanner.src = banner.url || DEFAULT_BANNER_URL;
  profileBanner.alt = banner.alt || `Profile banner for ${name}`;
  profileBanner.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_BANNER_URL}";`,
  );
}
