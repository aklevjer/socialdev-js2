import { createAlertTemplate } from "../../templates/ui/index.mjs";
import { clearElement } from "../../utils/html/index.mjs";

/**
 * Shows an alert message on screen.
 *
 * @param {string} alertType - The type of alert. (i.e. "error", "info").
 * @param {string} alertMessage - The alert message.
 * @param {HTMLElement} [parentElement] - The element to append the alert to, if provided. If not provided, the alert is displayed as a toast.
 *
 * @example
 * ```js
 * // Displaying an error toast
 * showAlert("error", "An error occurred!");
 * ```
 */
export function showAlert(alertType, alertMessage, parentElement = null) {
  const isToast = parentElement === null;
  const { alertClone, alertContainer } = createAlertTemplate(
    alertType,
    alertMessage,
    isToast,
  );

  if (isToast) {
    document.body.append(alertClone);
    setTimeout(() => alertContainer.remove(), 3000);
  } else {
    clearElement(parentElement);
    parentElement.appendChild(alertClone);
  }
}
