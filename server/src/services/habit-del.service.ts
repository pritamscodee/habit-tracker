import { eq } from "drizzle-orm";
import { db } from "../db";
import { Habits } from "../db/schema";

export const deleting_habitById = async (req_id: number): Promise<boolean> => {


    if (!req_id || req_id <= 0) {
        throw new Error("Invalid habit ID");
    }


    const existing = await db
        .select()
        .from(Habits)
        .where(eq(Habits.id, req_id));

    if (existing.length === 0) {
        throw new Error("Habit not found");
    }


    const deleted = await db
        .delete(Habits)
        .where(eq(Habits.id, req_id))
        .returning();

    if (deleted.length === 0) {
        throw new Error("Failed to delete habit");
    }



    return true;
};