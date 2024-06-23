export const setToken = (key = "token", value) => {
  const data = typeof value === "string" ? value : JSON.stringify(value);
  return localStorage.setItem(key, data);
};
export const getToken = (key = "token") => {
  return localStorage.getItem(key);
};
export const removeToken = (key = "token") => {
  return localStorage.removeItem(key);
};
