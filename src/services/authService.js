import API from "./axiosInstance";

export const loginUser = async (email, password) => {
  return API.post("auth/login", { email, password });
};


export const verifyToken = async () => {
  return API.get("/auth/verify");
};