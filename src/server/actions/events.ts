"use server"

import { db } from "@/drizzle/db"
import { users } from "@/drizzle/schema"
import { eventFormSchema } from "@/schema/events"
import { auth } from "@clerk/nextjs/server"
import { and, eq } from "drizzle-orm"
import { redirect } from "next/navigation"
import "use-server"
import { z } from "zod"

export async function createEvent(
  unsafeData: z.infer<typeof eventFormSchema>
): Promise<{ error: boolean } | undefined> {
  const { userId } = auth()
  const { success, data } = eventFormSchema.safeParse(unsafeData)

  if (!success || userId == null) {
    return { error: true }
  }

  await db.insert(users).values({ ...data, clerkUserId: userId })

  redirect("/events")
}

export async function updateEvent(
  id: string,
  unsafeData: z.infer<typeof eventFormSchema>
): Promise<{ error: boolean } | undefined> {
  const { userId } = auth()
  const { success, data } = eventFormSchema.safeParse(unsafeData)

  if (!success || userId == null) {
    return { error: true }
  }

  const { rowCount } = await db
    .update(users)
    .set({ ...data })
    .where(and(eq(users.id, id), eq(users.clerkUserId, userId)))

  if (rowCount === 0) {
    return { error: true }
  }

  redirect("/events")
}

export async function deleteEvent(
  id: string
): Promise<{ error: boolean } | undefined> {
  const { userId } = auth()

  if (userId == null) {
    return { error: true }
  }

  const { rowCount } = await db
    .delete(users)
    .where(and(eq(users.id, id), eq(users.clerkUserId, userId)))

  if (rowCount === 0) {
    return { error: true }
  }

  redirect("/events")
}
