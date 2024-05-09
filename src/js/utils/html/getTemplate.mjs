/**
 * Gets and clones a template from DOM.
 *
 * @param {string} templateName - The name of the template element.
 * @returns {DocumentFragment} A cloned document fragment of the template content if found, otherwise undefined.
 */
export function getTemplateClone(templateName) {
  const template = document.querySelector(`#${templateName}-template`);

  if (template) {
    return template.content.cloneNode(true);
  }
}
