import axios from "axios";
import type { GeneratePlanResponse } from "@/types/types";

export const api = axios.create({
  baseURL: "http://localhost:3005/api/habits",
  headers: {
    "Content-Type": "application/json",
  },
});

export const generatePlan = async (
  habit: string,
): Promise<GeneratePlanResponse> => {
  const res = await api.post<GeneratePlanResponse>("/plan", { habit });
  return res.data;
};
