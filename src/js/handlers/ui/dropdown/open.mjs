import { closeDropdown } from "./index.mjs";

export function openDropdown(event) {
  event.stopPropagation();

  const dropdownBtn = event.currentTarget;
  const dropdown = dropdownBtn.nextElementSibling;

  if (dropdown.classList.contains("hidden")) {
    closeDropdown(); // Close the currently open dropdown, if any

    dropdown.classList.remove("hidden");
    dropdownBtn.setAttribute("aria-expanded", "true");
    document.addEventListener("click", closeDropdown);
  } else {
    closeDropdown();
  }
}
