import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes";

dotenv.config();

export const app = express();

app.use(
  cors({
    origin: [
    "https://habiatio.netlify.app","https://69e2ad6ac249e613a9455f11--habiatio.netlify.app"
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
