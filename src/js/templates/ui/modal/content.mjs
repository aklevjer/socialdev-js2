export function updateModalContent(modalClone, modalType) {
  const modalTitle = modalClone.querySelector(".modal-title");
  const modalSubmitBtn = modalClone.querySelector(".modal-submit-btn");

  let title = "";
  let btnText = "";

  switch (modalType) {
    case "editPost":
      title = "Edit post";
      btnText = "Update post";
      break;

    case "editProfile":
      title = "Edit profile";
      btnText = "Save";
      break;

    default:
      title = "Create post";
      btnText = "Post";
  }

  modalTitle.textContent = title;
  modalSubmitBtn.textContent = btnText;
}
