import bcrypt from 'bcrypt'
import { db } from '../db/index'
import { users } from '../db/schema';






export const registerUser = async (email: string, password: string) => {
    try {
        console.log("Starting registration process");
        
        if (!email || !password) {
            throw new Error("Email and password are required");
        }

        if (password.length < 6) {
            throw new Error("Password must be at least 6 characters");
        }

        const hashed = await hashPassword(password);
        console.log("Password hashed successfully");

        const user = await db.insert(users).values({
            email,
            password: hashed,
        }).returning();

        console.log("User inserted successfully");
        return user[0];
    } catch (error: any) {
        console.error("Register service error:", error);
        
        if (error.code === '23505') {
            throw new Error("Email already exists");
        }
        
        if (error.message.includes("database")) {
            throw new Error("Database connection error");
        }
        
        throw error;
    }
};


export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
};