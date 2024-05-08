import { handleUpdateProfile } from "../../../handlers/profiles/index.mjs";
import {
  handleCreatePost,
  handleUpdatePost,
} from "../../../handlers/posts/index.mjs";

/**
 * Updates the modal content within a modal template.
 *
 * @param {DocumentFragment} modalClone The cloned modal template containing the content.
 * @param {string} modalType - The type of modal to be updated. (i.e. "createPost", "editPost", "editProfile").
 * @param {Object} modalData - The data specific to the modal type.
 */
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
