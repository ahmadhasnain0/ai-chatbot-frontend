import API from "./axiosInstance";

export const loginUser = async (email, password) => {
  return API.post("auth/login", { email, password });
};


export const verifyToken = () => {
  return API.get("auth/verify", {
    withCredentials: true,
  });
};


export const logoutUser = async () => {
  return API.post("/auth/logout");
}