import * as postComps from "./index.mjs";
import * as storage from "../../utils/storage/index.mjs";
import { getTemplateClone } from "../../utils/html/index.mjs";

export function createPostTemplate(postData) {
  const postClone = getTemplateClone("post");
  const postContainer = postClone.querySelector(".post");

  const { name: loggedInUser } = storage.get("profile");

  postComps.updatePostHeader(postClone, postData, loggedInUser);
  postComps.updatePostContent(postClone, postData);
  postComps.updatePostTags(postClone, postData);
  postComps.updatePostImage(postClone, postData);
  postComps.updatePostFooter(postClone, postData, loggedInUser);

  postContainer.id = `post-${postData.id}`;

  return postClone;
}
