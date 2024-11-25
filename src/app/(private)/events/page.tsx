import { auth } from "@clerk/nextjs/server"

export const revalidate = 0

export default async function EventsPage() {
  const { userId, redirectToSignIn } = auth()

  if (userId == null) return redirectToSignIn()

  return (
    <>
      <div className="flex gap-4 items-baseline">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6">
          Events
        </h1>
      </div>
    </>
  )
}


