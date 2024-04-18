import { register, login } from "../../api/index.mjs";

async function handleRegister(event) {
  event.preventDefault();

  const registerForm = event.target;
  const formData = new FormData(registerForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await register(account);
  } catch (error) {
    console.error(error);
    return;
  }

  try {
    const { name, ...profile } = account;
    await login(profile);
    location.href = "/profile/";
  } catch (error) {
    console.error(error);
  }
}

export function setRegisterListener() {
  const registerForm = document.forms.register;

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
  }
}
