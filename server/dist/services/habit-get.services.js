import { db } from "../db";
import { Habits } from "../db/schema";
export const get_data = async () => {
    try {
        const get_habit = await db
            .select({
            name: Habits.name,
            desc: Habits.description,
            id: Habits.id,
        })
            .from(Habits);
        if (!get_habit) {
            throw new Error("No data returned from database");
        }
        return get_habit;
    }
    catch (error) {
        console.error("!! DB Error in get_data:", {
            message: error?.message,
        });
        throw {
            status: 500,
            message: "Failed to fetch habits",
        };
    }
};
