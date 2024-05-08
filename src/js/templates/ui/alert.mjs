import { getTemplateClone } from "../../utils/html/index.mjs";

/**
 * Creates and populates an alert template.
 *
 * @param {string} alertType - The type of alert. (i.e. "error", "info").
 * @param {string} alertMessage - The alert message.
 * @param {boolean} isToast - Indicates if the alert should be a toast or not.
 * @returns {Object} An object containing the cloned alert template and the alert container element.
 */
export function createAlertTemplate(alertType, alertMessage, isToast) {
  const alertClone = getTemplateClone("alert");
  const alertContainer = alertClone.querySelector(".alert-container");
  const alertContent = alertClone.querySelector(".alert-content");
  const alertIcon = alertClone.querySelector(".alert-icon");
  const alertMsg = alertClone.querySelector(".alert-message");

  const isError = alertType === "error";

  alertContent.classList.add(isError ? "bg-red-900" : "bg-gray-600");
  alertIcon.classList.add("bi", isError ? "bi-x-circle" : "bi-info-circle");
  alertMsg.textContent = alertMessage;

  if (!isToast) {
    alertContainer.classList.remove(...alertContainer.classList);
  }

  return { alertClone, alertContainer };
}
