import bcrypt from 'bcrypt'
import { db } from '../db/index'
import { users } from '../db/schema';






export const registerUser = async (email: string, password: string) => {
    const hashed = await hashPassword(password);

    const user = await db.insert(users).values({
        email,
        password: hashed,
    }).returning();

    return user[0];
};


export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
};