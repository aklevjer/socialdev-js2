import * as profileComps from "./index.mjs";
import { getTemplateClone } from "../../utils/html/index.mjs";

/**
 * Creates and populates a profile template.
 *
 * @param {Object} profileData - The data of the profile.
 * @returns {DocumentFragment} The cloned profile template populated.
 */
export function createProfileTemplate(profileData) {
  const profileClone = getTemplateClone("profile");

  profileComps.updateProfileBanner(profileClone, profileData);
  profileComps.updateProfileHeader(profileClone, profileData);
  profileComps.updateProfileFooter(profileClone, profileData);

  return profileClone;
}
