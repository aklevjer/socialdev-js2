import { register, login } from "../../api/auth/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Registers a new account when the registration form is submitted and logs in the user.
 *
 * @param {Event} event - The event object representing the register form submission.
 */
async function handleRegister(event) {
  event.preventDefault();

  const registerForm = event.target;
  const formData = new FormData(registerForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await register(account);
    const { name, ...profile } = account;

    await login(profile);
    location.href = "/profile/";
  } catch (error) {
    const formMsg = document.querySelector("#form-message");
    showAlert("error", error.message, formMsg);
  }
}

/**
 * Sets a event listener for the register form submission.
 */
export function setRegisterListener() {
  const registerForm = document.forms.register;

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
  }
}
