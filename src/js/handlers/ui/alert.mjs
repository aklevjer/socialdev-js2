import { createAlertTemplate } from "../../templates/ui/index.mjs";
import { clearElement } from "../../utils/html/index.mjs";

export function showAlert(alertType, alertMessage, parentElement) {
  const alertClone = createAlertTemplate(alertType, alertMessage);

  if (parentElement) {
    clearElement(parentElement);
    parentElement.appendChild(alertClone);
  }
}
