import { v4 as uuidv4 } from 'uuid';
import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core"

export const goals = pgTable('goals', {
    id: text("id").primaryKey().$defaultFn(() => uuidv4()),
    title: text('title').notNull(),
    desiredWeekFrequency: integer('desired_week_frequency').notNull(),
    createAt: timestamp('create_at', { withTimezone: true }).notNull().defaultNow()
})

export const completedGoals = pgTable('completed_goals', {
    id: text("id").primaryKey().$defaultFn(() => uuidv4()),
    idGoals: text('id_goals').references(() => goals.id).notNull(),
    createAt: timestamp('create_at', { withTimezone: true }).notNull().defaultNow()
})