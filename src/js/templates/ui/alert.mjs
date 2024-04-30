import { getTemplateClone } from "../../utils/html/index.mjs";

export function createAlertTemplate(alertType, alertMessage) {
  const alertClone = getTemplateClone("alert");
  const alertContainer = alertClone.querySelector(".alert-container");
  const alertIcon = alertClone.querySelector(".alert-icon");
  const alertMsg = alertClone.querySelector(".alert-message");

  const isError = alertType === "error";

  alertContainer.classList.add(isError ? "bg-red-900" : "bg-gray-600");
  alertIcon.classList.add("bi", isError ? "bi-x-circle" : "bi-info-circle");
  alertMsg.textContent = alertMessage;

  return alertClone;
}
