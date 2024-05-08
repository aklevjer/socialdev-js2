import { createModalTemplate } from "../../../templates/ui/modal/index.mjs";

/**
 * Handles opening a modal.
 *
 * @param {string} modalType - The type of modal to be opened. (i.e. "createPost", "editPost", "editProfile").
 * @param {object} [modalData = {}] - The data specific to the modal type.
 */
export function openModal(modalType, modalData = {}) {
  const { modalClone, modal } = createModalTemplate(modalType, modalData);

  document.body.append(modalClone);
  document.body.classList.add("overflow-hidden");

  modal.showModal();
}
