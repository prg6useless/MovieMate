export const BASE_URL = import.meta.env.VITE_API_URL;

export const API_URL = BASE_URL + "api/v1";
console.log(API_URL)
export const APIs = {
  MOVIES: API_URL + "/movies",
  USERS: API_URL + "/users",
};
