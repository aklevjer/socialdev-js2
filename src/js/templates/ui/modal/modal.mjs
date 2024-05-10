import * as modalComps from "./index.mjs";
import { getTemplateClone } from "../../../utils/html/index.mjs";
import {
  closeModal,
  closeModalOutside,
  closeModalEscKey,
} from "../../../handlers/ui/modal/index.mjs";

/**
 * Creates and populates a modal template.
 *
 * @param {string} modalType - The type of modal to be created. (i.e. "createPost", "editPost", "editProfile").
 * @param {Object} modalData - The data specific to the modal type.
 *
 * @returns {Object} An object containing the cloned modal template and the modal element.
 */
export function createModalTemplate(modalType, modalData) {
  const modalClone = getTemplateClone("modal");
  const modal = modalClone.querySelector(".modal");
  const modalCancelBtn = modalClone.querySelector(".modal-cancel-btn");

  modalComps.updateModalContent(modalClone, modalType, modalData);
  modalComps.updateModalInputs(modalClone, modalType, modalData);

  modalCancelBtn.addEventListener("click", closeModal);
  document.addEventListener("click", closeModalOutside);
  document.addEventListener("keydown", closeModalEscKey);

  return {
    modalClone,
    modal,
  };
}
