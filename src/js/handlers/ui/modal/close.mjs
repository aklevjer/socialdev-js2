export function closeModal() {
  const modal = document.querySelector(".modal");

  if (modal) {
    modal.remove();
    document.body.classList.remove("overflow-hidden");
    document.removeEventListener("click", closeModalOutside);
  }
}

export function closeModalOutside(event) {
  if (event.target.classList.contains("modal")) {
    closeModal();
  }
}
