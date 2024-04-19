import { register, login } from "../../api/index.mjs";
import { showErrorAlert } from "../ui/index.mjs";

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
    showErrorAlert(error.message, formMsg);
  }
}

export function setRegisterListener() {
  const registerForm = document.forms.register;

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
  }
}
