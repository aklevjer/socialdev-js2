export function closeDropdown() {
  const openDropdown = document.querySelector(".dropdown:not(.hidden)");

  if (openDropdown) {
    const dropdownBtn = openDropdown.previousElementSibling;

    openDropdown.classList.add("hidden");
    dropdownBtn.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", closeDropdown);
  }
}
