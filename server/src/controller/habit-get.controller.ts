import type { Response, Request } from "express";
import { get_data } from "../services/habit-get.services";

export async function Get_Req(req: Request, res: Response): Promise<void> {
  try {
    const get_All_habits = await get_data();

    res.status(200).json({
      success: true,
      data: get_All_habits,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch habits",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
