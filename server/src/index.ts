import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes";
import { registerUser } from './auth/register.service.js';
import { loginUser } from "./auth/login.service.js";

dotenv.config();

export const app = express();

app.use(
  cors({
    origin: [
      "https://habiatio.netlify.app", "https://69e2ad6ac249e613a9455f11--habiatio.netlify.app"
    ]
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



app.post("/auth/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await registerUser(email, password);

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "error" });
  }
});






app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await loginUser(email, password);

    res.json(data);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
});


app.use("/api/habits", router);








app.get("/", (req, res) => {
  console.log("Server is  okay");
  res.send("Server is ok !");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port ", process.env.PORT);
});
