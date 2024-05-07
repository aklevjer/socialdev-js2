import { createModalTemplate } from "../../../templates/ui/modal/index.mjs";

export function openModal(modalType, modalData = {}) {
  const { modalClone, modal } = createModalTemplate(modalType, modalData);

  document.body.append(modalClone);
  document.body.classList.add("overflow-hidden");

  modal.showModal();
}
