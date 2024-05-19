/**
 * Updates the footer within a profile template.
 *
 * @param {DocumentFragment} profileClone - The cloned profile template containing the footer.
 * @param {Object} profileData - The data of the profile.
 */
export function updateProfileFooter(profileClone, profileData) {
  const profileFollowers = profileClone.querySelector(".profile-followers");
  const profileFollowing = profileClone.querySelector(".profile-following");
  const profilePosts = profileClone.querySelector(".profile-posts");

  const { _count } = profileData;

  // Followers count
  profileFollowers.textContent = _count.followers;

  // Following count
  profileFollowing.textContent = _count.following;

  // Posts count
  profilePosts.textContent = _count.posts;
}
