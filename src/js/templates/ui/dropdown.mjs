import { getTemplateClone } from "../../utils/html/index.mjs";
import { openDropdown } from "../../handlers/ui/dropdown/index.mjs";
import { openModal } from "../../handlers/ui/modal/index.mjs";
import {
  handleRemovePost,
  handleUpdatePost,
} from "../../handlers/posts/index.mjs";

export function createDropdownTemplate(postData) {
  const dropdownClone = getTemplateClone("dropdown");
  const dropdownBtn = dropdownClone.querySelector(".dropdown-btn");
  const editPostBtn = dropdownClone.querySelector(".edit-post-btn");
  const delPostBtn = dropdownClone.querySelector(".del-post-btn");

  dropdownBtn.addEventListener("click", openDropdown);
  delPostBtn.addEventListener("click", () => handleRemovePost(postData.id));
  editPostBtn.addEventListener("click", () => {
    openModal(
      "editPost",
      (event) => handleUpdatePost(event, postData.id),
      postData,
    );
  });

  return dropdownClone;
}
