import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout"
import { Navbar } from "@/components/admin-panel/navbar"
import { UserButton } from "@clerk/nextjs"
import { ReactNode } from "react"

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (

    <>
      <AdminPanelLayout>

      {/* <header className="flex py-2 border-b bg-card"> */}
        {/* <nav className="font-medium flex items-center text-sm gap-6 container">
          <div className="flex items-center gap-2 font-semibold mr-auto">
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl font-bold">DCMS</span>
          </div>
        </nav> */}
      {/* </header> */}
      <Navbar />
      <main className="container pt-8 pb-8 px-4 sm:px-8">{children}</main>
      </AdminPanelLayout>
    </>
  )
}
