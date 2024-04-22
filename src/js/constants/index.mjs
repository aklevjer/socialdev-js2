// API
export const API_KEY = "4cbd4ef6-0f9d-4b5f-973a-126e04971534";
export const API_BASE = "https://v2.api.noroff.dev";

export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN = "/login";
export const API_SOCIAL = "/social";
export const API_POSTS = "/posts";
export const API_PROFILES = "/profiles";

export const API_PARAMS_POSTS = "?_author=true&_comments=true&_reactions=true";

export const API_REGISTER_URL = API_BASE + API_AUTH + API_REGISTER;
export const API_LOGIN_URL = API_BASE + API_AUTH + API_LOGIN;
export const API_POSTS_URL = API_BASE + API_SOCIAL + API_POSTS;
export const API_PROFILES_URL = API_BASE + API_SOCIAL + API_PROFILES;

// Default image urls
export const DEFAULT_AVATAR_URL = "/src/assets/img/default-avatar.jpg";
export const DEFAULT_BANNER_URL = "/src/assets/img/default-banner.jpg";
export const DEFAULT_POST_URL = "/src/assets/img/default-post.jpg";
