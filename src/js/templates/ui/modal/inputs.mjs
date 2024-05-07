export function updateModalInputs(modalClone, modalType, modalData) {
  const modalForm = modalClone.querySelector(".modal-form");
  const modalPostInputs = modalClone.querySelector(".modal-post-inputs");
  const modalProfileInputs = modalClone.querySelector(".modal-profile-inputs");

  switch (modalType) {
    case "editPost":
      const { title, body, tags, media } = modalData;

      modalForm.title.value = title;
      modalForm.mediaurl.value = media?.url || "";
      modalForm.tags.value = tags.join(" ") || "";
      modalForm.body.value = body || "";

      modalProfileInputs.remove();
      break;

    case "editProfile":
      const { banner, avatar } = modalData;

      modalForm.bannerurl.value = banner.url;
      modalForm.avatarurl.value = avatar.url;

      modalPostInputs.remove();
      break;

    default:
      modalProfileInputs.remove();
  }
}
