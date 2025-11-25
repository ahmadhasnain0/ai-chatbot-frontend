import API from "./axiosInstance";

export const loginUser = async (email, password) => {
  const data = await API.post("auth/login", { email, password });
  // Save token to localStorage
  localStorage.setItem("token", data.token);
  return data;
};


export const verifyToken = () => {
  return API.get("auth/verify"); // token is sent automatically in header
};


export const logoutUser = async () => {
  return API.post("/auth/logout");
};
