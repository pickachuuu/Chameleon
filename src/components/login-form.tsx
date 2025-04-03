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

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
        <motion.div
        // initial={{ backgroundColor: "rgba(187, 247, 208, 1)", borderColor: "rgba(0, 0, 0, 1)" }}
        // animate={{ backgroundColor: "rgba(22, 163, 74, 0)", borderColor: "rgba(255, 255, 255, 1)" }} 

        initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl backdrop-blur-md shadow-2xl"
        >
            <Card className="w-[400px] ">
                <motion.div
                    initial={{ color: "rgb(0, 0, 0)" }}
                    animate={{ color: "rgb(255, 255, 255)" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    >
                    <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    </CardHeader>
                </motion.div>   

                <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
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
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full bg-green-950">
                        Sign In
                    </Button>
                    <Button variant="outline" className="w-full">
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
