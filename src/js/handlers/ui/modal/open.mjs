import { createModalTemplate } from "../../../templates/ui/modal/index.mjs";

export function openModal(modalType, submitCallback, modalData = {}) {
  const { modalClone, modal } = createModalTemplate(
    modalType,
    submitCallback,
    modalData,
  );

  document.body.append(modalClone);
  document.body.classList.add("overflow-hidden");

  modal.showModal();
}
