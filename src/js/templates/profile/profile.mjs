import * as profileComps from "./index.mjs";
import { getTemplateClone } from "../../utils/html/index.mjs";

export function createProfileTemplate(profileData) {
  const profileClone = getTemplateClone("profile");

  profileComps.updateProfileBanner(profileClone, profileData);
  profileComps.updateProfileHeader(profileClone, profileData);
  profileComps.updateProfileFooter(profileClone, profileData);

  return profileClone;
}
