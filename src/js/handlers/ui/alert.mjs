import { createAlertTemplate } from "../../templates/ui/index.mjs";
import { clearElement } from "../../utils/html/index.mjs";

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
