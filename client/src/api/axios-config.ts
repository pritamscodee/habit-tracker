

import axios from "axios";

export const api = axios.create({
  baseURL: "https://habit-tracker-i0eb.onrender.com/api/habits",
  headers: {
    "Content-Type": "application/json",
  },
});

