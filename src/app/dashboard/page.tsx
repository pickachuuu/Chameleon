"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect to login page if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/")
    }
  }, [status, router])


  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading your dashboard...</div>
      </div>
    )
  }

  // If not authenticated, don't render anything (the useEffect will handle redirect)
  if (status === "unauthenticated") {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-12 w-full">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-[600px] w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
        
        {session?.user && (
          <div className="mb-6">
            <p className="text-lg mb-2">Welcome, <span className="font-semibold">{session.user.name || session.user.email}</span>!</p>
            <p className="text-sm text-gray-400">You are signed in with: {session.user.email}</p>
          </div>
        )}
        
        <Button 
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          Sign Out
        </Button>
      </div>
    </div>
  )
}