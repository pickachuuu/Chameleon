"use client"

import { motion } from "motion/react";
import Image from "next/image";
import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.5 }}
    className="relative min-h-screen bg-cover bg-no-repeat flex-justify-items items-center bg-black">
      <Image
        src="/backgrounds/background2.jpg"
        alt="Background image"
        fill={true}
        priority
      />
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ 
        opacity: { duration: 2, delay: 0.5 }
      }}
      className="absolute w-[100px] h-[100px] mx-5">
        <Image
        src="/logo/Logo.png"
        alt="Logo"
        fill={true}
        />
      </motion.div>

      <div className="relative flex justify-center items-center min-h-screen">
        <div>
          <LoginForm/>
        </div>
      </div>
    </motion.div>
  );
}
