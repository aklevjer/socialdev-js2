import { getTemplateClone } from "../../utils/html/index.mjs";
import { openDropdown } from "../../handlers/ui/dropdown/index.mjs";
import { openModal } from "../../handlers/ui/modal/index.mjs";
import { handleRemovePost } from "../../handlers/posts/index.mjs";
import { handleRemoveComment } from "../../handlers/comments/index.mjs";

/**
 * Creates a dropdown template.
 *
 * @param {string} dropdownType - The type of dropdown. (i.e. "post", "comment").
 * @param {Object} dropdownData - The data specific to the dropdown type.
 * @returns {DocumentFragment} The cloned dropdown template.
 */
export function createDropdownTemplate(dropdownType, dropdownData) {
  const dropdownClone = getTemplateClone("dropdown");
  const dropdownBtn = dropdownClone.querySelector(".dropdown-btn");
  const editPostBtn = dropdownClone.querySelector(".edit-post-btn");
  const delPostBtn = dropdownClone.querySelector(".del-post-btn");
  const delCommentBtn = dropdownClone.querySelector(".del-comment-btn");

  dropdownBtn.addEventListener("click", openDropdown);

  if (dropdownType === "post") {
    delPostBtn.addEventListener("click", () =>
      handleRemovePost(dropdownData.id),
    );

    editPostBtn.addEventListener("click", () =>
      openModal("editPost", dropdownData),
    );

    delCommentBtn.remove();
  } else {
    delCommentBtn.addEventListener("click", () =>
      handleRemoveComment(dropdownData.postId, dropdownData.id),
    );

    editPostBtn.remove();
    delPostBtn.remove();
  }

  return dropdownClone;
}
