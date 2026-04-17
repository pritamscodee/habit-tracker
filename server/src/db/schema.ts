import {
  pgTable,
  text,
  integer,
  timestamp,
  serial,
  jsonb,
} from "drizzle-orm/pg-core";

export const Habits = pgTable("habits", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  created_at: timestamp("created_at").notNull().defaultNow(),
});

export const completed_habits = pgTable("completed_habits", {
  id: serial("id").primaryKey(),
  habit_id: integer("habit_id").references(() => Habits.id),
  completed_at: timestamp("completed_at").notNull(),
});

export const failed_habits = pgTable("failed_habits", {
  id: serial("id").primaryKey(),
  habit_id: integer("habit_id").references(() => Habits.id),
  failed_at: timestamp("failed_at").notNull(),
});

export const habitPlans = pgTable("habit_plans", {
  id: serial("id").primaryKey(),
  habit: text("habit").notNull(),
  plan: jsonb("plan").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
