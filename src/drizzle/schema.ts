import {
  boolean,
  index,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core"

const createdAt = timestamp("createdAt").notNull().defaultNow()
const updatedAt = timestamp("updatedAt")
  .notNull()
  .defaultNow()
  .$onUpdate(() => new Date())

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    designation: text("designation"),
    profileImg: text("profileImg"),
    clerkUserId: text("clerkUserId").notNull(),
    isActive: boolean("isActive").notNull().default(true),
    createdAt,
    updatedAt,
  },
  table => ({
    clerkUserIdIndex: index("clerkUserIdIndex").on(table.clerkUserId),
  })
)
