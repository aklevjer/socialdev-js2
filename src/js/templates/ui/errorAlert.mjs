import { getTemplateClone } from "../../utils/index.mjs";

export function createErrorAlert(errorMessage) {
  const errorClone = getTemplateClone("error");
  const errorMsg = errorClone.querySelector(".error-message");

  errorMsg.textContent = errorMessage;

  return errorClone;
}
