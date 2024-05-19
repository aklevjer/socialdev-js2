import { login } from "../../api/auth/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Logs in to an account when the login form is submitted.
 *
 * @param {Event} event - The event object representing the login form submission.
 */
async function handleLogin(event) {
  event.preventDefault();

  const loginForm = event.target;
  const formData = new FormData(loginForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await login(account);
    location.href = "/profile/";
  } catch (error) {
    const formMsg = document.querySelector("#form-message");
    showAlert("error", error.message, formMsg);
  }
}

/**
 * Sets a event listener for the login form submission.
 */
export function setLoginListener() {
  const loginForm = document.forms.login;

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }
}
