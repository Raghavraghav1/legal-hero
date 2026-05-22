"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type CardColor = "blue" | "orange" | "dark";

interface PillProps {
  variant?: "pill";
  color: CardColor;
  icon: LucideIcon;
  label: string;
  rotation?: number;
  delay?: number;
  className?: string;
}

interface PortalProps {
  variant: "portal";
  name: string;
  message: string;
  time: string;
  rotation?: number;
  delay?: number;
  className?: string;
}

type FloatingCardProps = PillProps | PortalProps;

const colorMap = {
  blue: {
    bg: "bg-[#3B3BFF]",
    iconBg: "bg-[#5050FF]",
    text: "text-white",
    icon: "text-white",
  },
  orange: {
    bg: "bg-[#D4711A]",
    iconBg: "bg-[#E08530]",
    text: "text-white",
    icon: "text-white",
  },
  dark: {
    bg: "bg-[#252438]",
    iconBg: "bg-[#2F2D48]",
    text: "text-white",
    icon: "text-[#D4711A]",
  },
};

// Shared constants for uniform sizing
const H = "h-[72px]";
const W = "w-[330px]";
const ICON_WRAP = "w-11 h-11 rounded-full flex items-center justify-center shrink-0";
const LABEL = "text-[1.1rem] font-bold tracking-tight whitespace-nowrap";

export function FloatingCard(props: FloatingCardProps) {
  const { rotation = 0, delay = 0, className = "" } = props;

  const base = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] as number[] },
    whileHover: { scale: 1.05 },
    style: { rotate: rotation },
  };

  if (props.variant === "portal") {
    return (
      <motion.div
        {...base}
        className={`
          bg-[#C9CBE8] dark:bg-slate-700
          rounded-full shadow-xl
          flex items-center
          ${H} ${W} px-3 gap-3
          ${className}
        `}
      >
        <div className="w-[5px] h-10 rounded-full bg-[#D4711A] shrink-0 ml-1" />

        <div className="w-11 h-11 rounded-full bg-[#7B5C44] flex items-center justify-center shrink-0 overflow-hidden border-2 border-white/20">
          <span className="text-[1.4rem] leading-none select-none">🧑🏾</span>
        </div>

        <div className="flex flex-col justify-center min-w-0 pr-2">
          <p className="text-[12.5px] font-bold text-slate-800 dark:text-white truncate">
            {props.name}
          </p>
          <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-tight mt-0.5 line-clamp-2">
            {props.message}
          </p>
          <p className="text-[9.5px] text-slate-500 mt-1 font-mono">{props.time}</p>
        </div>
      </motion.div>
    );
  }

  const { color, icon: Icon, label } = props as PillProps;
  const c = colorMap[color];

  return (
    <motion.div
      {...base}
      className={`
        ${c.bg} ${c.text}
        rounded-full shadow-2xl
        flex items-center gap-3
        ${H} ${W} px-4
        cursor-default select-none
        ${className}
      `}
    >
      <div className={`${ICON_WRAP} ${c.iconBg} ${c.icon}`}>
        <Icon size={24} strokeWidth={2} />
      </div>

      <span className={`${LABEL} pr-3`}>{label}</span>
    </motion.div>
  );
}