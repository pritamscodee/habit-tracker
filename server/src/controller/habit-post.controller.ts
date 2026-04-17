import type { Response, Request } from "express";

import { habits_insert_db } from "../services/habit.post.services";
import { habitSchema } from "../validation/zod_validation";
import z from "zod";



export default async function createHabits(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const validatedHabit = habitSchema.parse(req.body);

    const insertedHabits = await habits_insert_db(validatedHabit);

    if (!insertedHabits || insertedHabits.length === 0) {
      res.status(500).json({
        message: "Habit creation failed - no data returned from database",
      });
      return;
    }

    const responseData = insertedHabits.map((habit) => ({
      id: habit.id,
      name: habit.name,
    }));

    res.status(201).json({
      message: "Habit created successfully",
      habit: responseData[0],
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        message: "Validation failed",
        errors: error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
      return;
    }

    console.error("Error creating habit:", error);
    res.status(500).json({
      message: "Failed to create habit",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
