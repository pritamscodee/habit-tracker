import { db } from "../db/index";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const SECRET = "your_secret_key"; // move to .env later

export const generateToken = (id: string) => {
    return jwt.sign({ id }, SECRET, { expiresIn: "1d" });
};
export const loginUser = async (email: string, password: string) => {
    const user = await db
        .select()
        .from(users)
        .where(eq(users.email, email));

    if (!user.length) {
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const token = generateToken(user[0].id);

    return {
        user: user[0],
        token,
    };
};