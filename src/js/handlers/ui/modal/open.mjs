import { createModal } from "../../../templates/ui/index.mjs";

export function openModal(submitHandler, postData = {}) {
  const { modalClone, modal } = createModal(submitHandler, postData);

  document.body.append(modalClone);
  document.body.classList.add("overflow-hidden");

  modal.showModal();
}
