import type { Response, Request } from "express";
import z from "zod";
import { db } from "../db";
import { Habits } from "../db/schema";

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
