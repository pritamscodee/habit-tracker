import type { Response, Request } from "express";
import { deleting_habitById } from "../services/habit-del.service";

export async function delete_habits(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      res.status(400).json({
        message: "Invalid habit ID",
      });
      return;
    }

    const del_habits = await deleting_habitById(id);

    if (!del_habits) {
      res.status(404).json({
        message: "Habit not found",
      });
      return;
    }

    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (error) {
    console.error("Delete habit error:", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
}
