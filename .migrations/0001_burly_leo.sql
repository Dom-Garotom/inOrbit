CREATE TABLE IF NOT EXISTS "completed_goals" (
	"id" text PRIMARY KEY NOT NULL,
	"id_goals" text NOT NULL,
	"create_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "completed_goals" ADD CONSTRAINT "completed_goals_id_goals_goals_id_fk" FOREIGN KEY ("id_goals") REFERENCES "public"."goals"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
