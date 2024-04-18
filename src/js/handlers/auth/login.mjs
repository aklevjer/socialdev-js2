import { login } from "../../api/auth/index.mjs";

async function handleLogin(event) {
  event.preventDefault();

  const loginForm = event.target;
  const formData = new FormData(loginForm);
  const account = Object.fromEntries(formData.entries());

  try {
    await login(account);
    location.href = "/profile/";
  } catch (error) {
    console.error(error);
  }
}

export function setLoginListener() {
  const loginForm = document.forms.login;

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }
}
