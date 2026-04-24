// src/api/auth.js

import { api } from "./axios-config";



export const registerAPI = (data:unknown) => {
  return api.post("/auth/register", data);
};

export const loginAPI = (data:unknown) => {
  return api.post("/auth/login", data);
};