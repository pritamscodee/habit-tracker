import { Router } from "express";
import create_habits, { delete_habits } from "../controller/habit-post";
import { Get_Req } from "../controller/habit-get.controller";
const router = Router();
router.post("/post", create_habits);
router.get("/get", Get_Req);
router.delete('/del/:id', delete_habits);
export { router };
