
import { z } from "zod";

export const habitSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description must be less than 200 characters"),
});
