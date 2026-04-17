import { Router } from "express";
import create_habits from "../controller/habit-post.controller";
import { Get_Req } from "../controller/habit-get.controller";
import { delete_habits } from "../controller/habit-del.controller";
const router = Router();
router.post("/post", create_habits);
router.get("/get", Get_Req);
router.delete("/del/:id", delete_habits);
export { router };
