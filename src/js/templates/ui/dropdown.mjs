import { getTemplateClone } from "../../utils/html/index.mjs";
import { openDropdown } from "../../handlers/ui/dropdown/index.mjs";
import { openModal } from "../../handlers/ui/modal/index.mjs";
import { handleRemoveComment } from "../../handlers/comments/index.mjs";
import {
  handleRemovePost,
  handleUpdatePost,
} from "../../handlers/posts/index.mjs";

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

    editPostBtn.addEventListener("click", () => {
      openModal(
        "editPost",
        (event) => handleUpdatePost(event, dropdownData.id),
        dropdownData,
      );
    });

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
