export function updateModalInputs(modalForm, modalType, modalData) {
  if (modalType === "editPost") {
    const { title, body, tags, media } = modalData;

    modalForm.title.value = title;
    modalForm.mediaurl.value = media?.url || "";
    modalForm.tags.value = tags.join(" ") || "";
    modalForm.body.value = body || "";
  } else if (modalType === "editProfile") {
    const { banner, avatar } = modalData;

    modalForm.bannerurl.value = banner.url;
    modalForm.avatarurl.value = avatar.url;
  }
}
