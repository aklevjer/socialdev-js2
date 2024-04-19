import { createErrorAlert } from "../../templates/ui/index.mjs";
import { clearElement } from "../../utils/html/index.mjs";

export function showErrorAlert(errorMessage, parentElement) {
  const errorClone = createErrorAlert(errorMessage);

  if (parentElement) {
    clearElement(parentElement);
    parentElement.appendChild(errorClone);
  }
}
