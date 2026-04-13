import type { Response, Request } from "express";
import z from "zod";
import { habits_insert_db } from "../services";

export default async function createHabits(
  req: Request,
  res: Response,
): Promise<void> {
  const habitSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    description: z
      .string()
      .trim()
      .min(10)
      .max(200, "Description must be less than 200 characters"),
  });

  const created_habits = habitSchema.parse(req.body);

  try {
    const inserted_habits = await habits_insert_db(created_habits);

    const [...resulting_data] = inserted_habits.map((e) => {
      return {
        id: e.id,
        name: e.name,
      };
    });

    if (resulting_data.length > 0) {
      console.log("Habit created successfully on database", resulting_data);

      res.status(201).json({
        message: "Habit created successfully on database",
        habit: resulting_data,
      });
    } else {
      res.status(400).json({ message: "Habit not created" });
    }
  } catch (error) {
    res.status(400).json({ message: "Failed to create habit", error });
  }
}
