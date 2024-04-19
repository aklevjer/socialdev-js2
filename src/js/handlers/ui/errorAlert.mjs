import { createErrorAlert } from "../../templates/ui/index.mjs";

export function showErrorAlert(errorMessage, targetElement) {
  const errorClone = createErrorAlert(errorMessage);

  if (targetElement) {
    targetElement.replaceWith(errorClone);
  }
}
