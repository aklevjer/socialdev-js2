import { handleUpdateProfile } from "../../../handlers/profiles/index.mjs";
import {
  handleCreatePost,
  handleUpdatePost,
} from "../../../handlers/posts/index.mjs";

export function updateModalContent(modalClone, modalType, modalData) {
  const modalForm = modalClone.querySelector(".modal-form");
  const modalTitle = modalClone.querySelector(".modal-title");
  const modalSubmitBtn = modalClone.querySelector(".modal-submit-btn");

  let title = "";
  let btnText = "";
  let submitHandler = null;

  switch (modalType) {
    case "editPost":
      title = "Edit post";
      btnText = "Update post";
      submitHandler = (event) => handleUpdatePost(event, modalData.id);
      break;

    case "editProfile":
      title = "Edit profile";
      btnText = "Save";
      submitHandler = (event) => handleUpdateProfile(event);
      break;

    default:
      title = "Create post";
      btnText = "Post";
      submitHandler = (event) => handleCreatePost(event);
  }

  modalTitle.textContent = title;
  modalSubmitBtn.textContent = btnText;
  modalForm.addEventListener("submit", submitHandler);
}
