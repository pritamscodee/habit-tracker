import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";
export const Habits = pgTable("habits", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    created_at: timestamp("created_at").notNull().defaultNow(),
});
