import * as modalComps from "./index.mjs";
import { getTemplateClone } from "../../../utils/html/index.mjs";
import {
  closeModal,
  closeModalOutside,
  closeModalEscKey,
} from "../../../handlers/ui/modal/index.mjs";

export function createModalTemplate(modalType, submitHandler, modalData) {
  const modalClone = getTemplateClone("modal");
  const modal = modalClone.querySelector(".modal");
  const modalForm = modalClone.querySelector(".modal-form");
  const modalPostInputs = modalClone.querySelector(".modal-post-inputs");
  const modalProfileInputs = modalClone.querySelector(".modal-profile-inputs");
  const modalCancelBtn = modalClone.querySelector(".modal-cancel-btn");

  modalComps.updateModalContent(modalClone, modalType);
  modalComps.updateModalInputs(modalForm, modalType, modalData);

  if (modalType === "editProfile") {
    modalPostInputs.remove();
  } else {
    modalProfileInputs.remove();
  }

  modalForm.addEventListener("submit", submitHandler);
  modalCancelBtn.addEventListener("click", closeModal);
  document.addEventListener("click", closeModalOutside);
  document.addEventListener("keydown", closeModalEscKey);

  return {
    modalClone,
    modal,
  };
}
