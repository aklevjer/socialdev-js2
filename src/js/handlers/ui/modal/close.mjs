export function closeModal() {
  const modal = document.querySelector(".modal");

  if (modal) {
    modal.remove();
    document.body.classList.remove("overflow-hidden");
    document.removeEventListener("click", closeModalOutside);
    document.removeEventListener("keydown", closeModalEscKey);
  }
}

export function closeModalOutside(event) {
  if (event.target.classList.contains("modal")) {
    closeModal();
  }
}

export function closeModalEscKey(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeModal();
  }
}
