"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "motion/react"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard"
      })

      if (result?.error) {
        setError("Invalid email or password")
      } else if (result?.url) {
        router.push(result.url)
      }
    } catch (error) {
      console.error("Authentication error:", error)
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
        <motion.div
        initial={{ backgroundColor: "rgba(187, 247, 208, 0)", borderColor: "rgba(0, 0, 0, 1)" }}
        animate={{ backgroundColor: "rgba(22, 163, 74, 0)", borderColor: "rgba(255, 255, 255, 1)" }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl backdrop-blur-md shadow-2xl"
        >
            <Card className="w-[400px] bg-transparent">
                <div>
                    <CardHeader>
                    <CardTitle className="text-2xl text-green-600">Login</CardTitle>
                    <CardDescription className="font-medium">
                        Enter your email below to login to your account
                    </CardDescription>
                    </CardHeader>
                </div>   

                <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}
                    <div className="grid gap-2">
                        <Label htmlFor="email" >Email</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                            href="#"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                        >
                            Forgot your password?
                        </a>
                        </div>
                        <Input 
                          id="password" 
                          type="password" 
                          required 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-green-600"
                      disabled={isLoading}
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      type="button"
                      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    >
                        Login with Google
                    </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="underline underline-offset-4">
                        Sign up
                    </a>
                    </div>
                </form>
                </CardContent>
            </Card>
        </motion.div>
    </div>
  )
}
