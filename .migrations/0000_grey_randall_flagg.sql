CREATE TABLE IF NOT EXISTS "goals" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"desired_week_frequency" integer NOT NULL,
	"create_at" timestamp with time zone DEFAULT now() NOT NULL
);
