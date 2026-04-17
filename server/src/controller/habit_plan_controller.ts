import { Request, Response } from "express";
import { generateHabitPlan } from "../services/habit_genPlan";

export const createHabitPlan = async (req: Request, res: Response) => {
  try {
    const { habit } = req.body;

    if (!habit) {
      return res.status(400).json({ error: "Habit is required" });
    }

    const plan = await generateHabitPlan(habit);

    return res.status(200).json(plan);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
