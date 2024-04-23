import { getTemplateClone } from "../../utils/html/index.mjs";
import {
  closeModal,
  closeModalOutside,
} from "../../handlers/ui/modal/index.mjs";

export function createModalTemplate(submitHandler, postData) {
  const modalClone = getTemplateClone("modal");
  const modal = modalClone.querySelector(".modal");
  const modalTitle = modalClone.querySelector(".modal-title");
  const modalForm = modalClone.querySelector(".modal-form");
  const modalPostBtn = modalClone.querySelector(".modal-post-btn");
  const modalCancelBtn = modalClone.querySelector(".modal-cancel-btn");

  const isEdit = Object.keys(postData).length !== 0;

  modalTitle.textContent = isEdit ? "Edit post" : "Create post";
  modalPostBtn.textContent = isEdit ? "Edit post" : "Post";

  if (isEdit) {
    const { title, body, tags, media } = postData;

    modalForm.title.value = title;
    modalForm.url.value = media?.url || "";
    modalForm.tags.value = tags.join(" ") || "";
    modalForm.body.value = body || "";
  }

  modalForm.addEventListener("submit", submitHandler);
  modalCancelBtn.addEventListener("click", closeModal);
  document.addEventListener("click", closeModalOutside);

  return {
    modalClone,
    modal,
  };
}
