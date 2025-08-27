/* schema.ts - excerpt from uploaded app replit.md */
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  age: integer("age").notNull(),
  points: integer("points").default(0),
  level: integer("level").default(1),
  streak: integer("streak").default(0),
  lastLoginDate: text("last_login_date"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const subjects = pgTable("subjects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  totalActivities: integer("total_activities").default(0),
});

/* truncated for scaffold... see your original file for full definitions */ 
