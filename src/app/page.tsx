"use client";
import { motion } from "framer-motion";
import { Receipt, Hexagon, ListChecks, FileText } from "lucide-react";
import { FloatingCard } from "@/components/FloatingCard";

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0  },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] as number[] },
});

export default function HeroPage() {
  return (
    <main className="
      relative min-h-screen overflow-hidden
      bg-[#ECEEF5] dark:bg-[#0E0F1A]
      font-sans
    ">
      

      {/* ── Decorative background pills ──────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* RIGHT: 3 stacked pills, partially off-screen */}
        <div className="
        rotate-[6deg]
          absolute right-[-320px] top-[15%]
          w-[580px] h-[88px]
          bg-[#DDE0EE] dark:bg-indigo-900/25
          rounded-full opacity-70
        "/>
        <div className="
        
          absolute right-[-220px] top-[30%]
          w-[580px] h-[88px]
          bg-[#DDE0EE] dark:bg-indigo-900/25
          rounded-full opacity-80
        "/>
        <div className="
        
          absolute right-[-320px] top-[45%]
          w-[580px] h-[88px]
          bg-[#D8DBE9] dark:bg-indigo-900/30
          rounded-full opacity-90
        "/>

        {/* LEFT BOTTOM: 2 pills, partially off-screen */}
        <div className="
          rotate-[-8deg]
          absolute left-[-120px] top-[55%]
          w-[320px] h-[88px]
          bg-[#DDE0EE] dark:bg-indigo-900/25
          rounded-full opacity-75
        "/>
        <div className="
          
          absolute left-[-120px] top-[70%]
          w-[420px] h-[88px]
          bg-[#DDE0EE] dark:bg-indigo-900/25
          rounded-full opacity-80
        "/>

        <div className="
          
          absolute left-[-120px] top-[85%]
          w-[520px] h-[88px]
          bg-[#DDE0EE] dark:bg-indigo-900/25
          rounded-full opacity-80
        "/>

      </div>
      
      

      {/* ── Main content ─────────────────────────────────── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-10 lg:px-20 pt-20 pb-10">

        {/* ── Headline ── */}
        <div className="max-w-[580px]">
          <motion.h1
            {...fadeUp(0.05)}
            className="
              text-5xl lg:text-[3.8rem] leading-[1.15] tracking-tight
              text-[#5A5F8A] dark:text-slate-300
            "
          >
            A single platform to{" "}
            <strong className="font-extrabold text-[#2D2F4A] dark:text-white">manage</strong>{" "}
            every part of your{" "}
            <strong className="font-extrabold text-[#2D2F4A] dark:text-white">legal work</strong>
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            className="
              mt-5 text-[15px] text-[#6B7099] dark:text-slate-400
              leading-relaxed max-w-[440px]
            "
          >
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication – all in one system.
          </motion.p>
        </div>

        {/* ── Floating cards ────────────────────────────── */}
<div className="relative h-[420px] mt-[-20px] hidden sm:block">

  {/* Billing */}
  <div className="absolute top-[12px] left-[50%] animate-float">
    <FloatingCard
      icon={Receipt}
      label="Billing"
      color="blue"
      rotation={10}
      delay={0.3}
    />
  </div>

  {/* Matters */}
  <div className="absolute top-[148px] left-[14%] animate-float-delayed">
    <FloatingCard
      icon={Hexagon}
      label="Matters"
      color="orange"
      rotation={4}
      delay={0.45}
    />
  </div>

  {/* John Doe Portal */}
  <div className="absolute top-[152px] left-[49%] animate-float-slow">
    <FloatingCard
      variant="portal"
      name="John Doe – Portal"
      message="Hey! Could you please review a document for me?"
      time="MAT-2233 – 2 h ago"
      rotation={3}
      delay={0.4}
    />
  </div>

  {/* Tasks */}
  <div className="absolute top-[292px] left-[25%] animate-float">
    <FloatingCard
      icon={ListChecks}
      label="Tasks"
      color="dark"
      rotation={-3}
      delay={0.55}
    />
  </div>

  {/* Documents */}
  <div className="absolute top-[286px] left-[60%] animate-float-delayed">
    <FloatingCard
      icon={FileText}
      label="Documents"
      color="dark"
      rotation={2}
      delay={0.6}
    />
  </div>

        </div>
      </div>
    </main>
  );
}