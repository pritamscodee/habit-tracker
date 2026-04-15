
import { db } from "../db";
import { Habits } from "../db/schema";
import { eq } from "drizzle-orm";

interface insert_data {
  name: string;
  description: string;
}

export const habits_insert_db = async (in_data: insert_data) => {
  const result = await db.insert(Habits).values(in_data).returning({
    id: Habits.id,
    name: Habits.name,
  });
  console.log("after insert db returning data : ", result);
  return result;
};


export const deleting_habitById = async (req_id: number): Promise<Boolean> => {


  const deleted = await db.delete(Habits).where(eq(Habits.id, req_id)).returning();

  if (deleted.length > 0) {
    return true
  } else {
    return false
  }






}