import * as storage from "../../utils/storage/index.mjs";
import { updateProfile } from "../../api/profiles/index.mjs";
import { closeModal } from "../ui/modal/index.mjs";
import { showAlert } from "../ui/index.mjs";

export async function handleUpdateProfile(event) {
  event.preventDefault();

  const editProfileForm = event.target;
  const profileBanner = document.querySelector(".profile-banner");
  const profileAvatar = document.querySelector(".profile-avatar");

  const formData = new FormData(editProfileForm);
  const bannerurl = formData.get("bannerurl");
  const avatarurl = formData.get("avatarurl");

  const { name, banner, avatar } = storage.get("profile");

  const updatedProfile = {
    banner: {
      url: bannerurl || banner.url,
      alt: `Profile banner for ${name}`,
    },
    avatar: {
      url: avatarurl || avatar.url,
      alt: `Avatar for ${name}`,
    },
  };

  try {
    const profile = await updateProfile(name, updatedProfile);
    closeModal();

    profileBanner.src = updatedProfile.banner.url;
    profileBanner.alt = updatedProfile.banner.alt;
    profileAvatar.src = updatedProfile.avatar.url;
    profileAvatar.alt = updatedProfile.avatar.alt;

    storage.set("profile", profile.data);
  } catch (error) {
    const formMsg = document.querySelector("#form-message");
    showAlert("error", error.message, formMsg);
  }
}
