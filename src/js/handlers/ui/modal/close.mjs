/**
 * Handles closing a modal.
 */
export function closeModal() {
  const modal = document.querySelector(".modal");

  if (modal) {
    modal.remove();
    document.body.classList.remove("overflow-hidden");
    document.removeEventListener("click", closeModalOutside);
    document.removeEventListener("keydown", closeModalEscKey);
  }
}

/**
 * Handles closing a modal on click outside of the modal.
 *
 * @param {Event} event - The event object representing the document click event.
 */
export function closeModalOutside(event) {
  if (event.target.classList.contains("modal")) {
    closeModal();
  }
}

/**
 * Handles closing a modal when the "Escape" key is clicked.
 *
 * @param {Event} event - The event object representing the document keydown event.
 */
export function closeModalEscKey(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeModal();
  }
}
