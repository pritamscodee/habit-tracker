import { db } from "../db";
import { Habits } from "../db/schema";
import { eq } from "drizzle-orm";
import { insert_data } from "../types/types";



export const habits_insert_db = async (in_data: insert_data) => {


  if (!in_data.name || in_data.name.trim().length < 3) {
    throw new Error("Habit name must be at least 3 characters");
  }

  if (!in_data.description || in_data.description.trim().length < 5) {
    throw new Error("Description must be at least 5 characters");
  }


  const existing = await db
    .select({ id: Habits.id })
    .from(Habits)
    .where(eq(Habits.name, in_data.name));

  if (existing.length > 0) {
    throw new Error("Habit with this name already exists");
  }


  const result = await db.insert(Habits).values(in_data).returning({
    id: Habits.id,
    name: Habits.name,
  });


  if (result.length === 0) {
    throw new Error("Failed to create habit");
  }

  console.log("after insert db returning data : ", result);

  return result;
};