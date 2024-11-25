CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"designation" text,
	"profileImg" text,
	"clerkUserId" text NOT NULL,
	"isActive" boolean DEFAULT true NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP TABLE "events";--> statement-breakpoint
DROP TABLE "scheduleAvailabilities";--> statement-breakpoint
DROP TABLE "schedules";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "clerkUserIdIndex" ON "users" USING btree ("clerkUserId");