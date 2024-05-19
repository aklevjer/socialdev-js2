/**
 * Toggles the display of the navigation.
 *
 * @param {Event} event - The event object representing the navigation button click event.
 */
function toggleNav(event) {
  const navBtn = event.currentTarget;
  const menuIcon = navBtn.firstElementChild;
  const nav = document.querySelector("#nav");
  const isExpanded = navBtn.getAttribute("aria-expanded") === "true";

  navBtn.setAttribute("aria-expanded", !isExpanded);

  menuIcon.classList.toggle("bi-list", isExpanded);
  menuIcon.classList.toggle("bi-x", !isExpanded);
  nav.classList.toggle("hidden", isExpanded);
}

/**
 * Sets an event listener for the navigation button to trigger the toggle navigation.
 */
export function setNavListener() {
  const navBtn = document.querySelector("#nav-btn");

  if (navBtn) {
    navBtn.addEventListener("click", toggleNav);
  }
}
