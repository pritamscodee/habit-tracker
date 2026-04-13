import { Router } from "express";

import create_habits from "../controller/habit-post";
const router = Router();

router.post("/post", create_habits);

export { router };
