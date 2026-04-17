import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes";

dotenv.config();

export const app = express();

app.use(
  cors({
    origin: [
      "https://habit-tracker-6r0w1kq3t-pritamscodees-projects.vercel.app",
      "https://habit-tracker-git-main-pritamscodees-projects.vercel.app",
      "https://habit-tracker-39w5su35b-pritamscodees-projects.vercel.app/"
    ]
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));




app.use("/api/habits", router);






app.get("/", (req, res) => {
  console.log("Server is  okay");
  res.send("Server is ok !");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port ", process.env.PORT);
});
