import React from "react";
import { motion } from "motion/react";

export default function TreeGateway({ onEnterTree }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto mb-14 w-full max-w-6xl"
    >
      <div className="relative h-[300px] w-full overflow-hidden md:h-[340px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_30%),linear-gradient(to_right,transparent,rgba(255,255,255,0.02),transparent)]" />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            boxShadow: [
              "0 0 0 rgba(255,255,255,0)",
              "0 0 60px rgba(255,255,255,0.05)",
              "0 0 0 rgba(255,255,255,0)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg
          viewBox="0 0 1200 340"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M600 170 C520 165, 470 150, 420 125 C360 95, 300 85, 220 92 C160 98, 110 120, 60 150"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1 }}
          />
          <motion.path
            d="M600 170 C520 180, 475 205, 430 232 C370 268, 300 278, 215 266 C150 257, 105 235, 55 205"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.2 }}
          />
          <motion.path
            d="M600 170 C680 165, 730 150, 780 125 C840 95, 900 85, 980 92 C1040 98, 1090 120, 1140 150"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1 }}
          />
          <motion.path
            d="M600 170 C680 180, 725 205, 770 232 C830 268, 900 278, 985 266 C1050 257, 1095 235, 1145 205"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.2 }}
          />
          <motion.path
            d="M600 170 C560 110, 548 70, 540 35"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35 }}
          />
          <motion.path
            d="M600 170 C640 110, 652 70, 660 35"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35 }}
          />
          <motion.path
            d="M600 170 C560 225, 548 265, 540 305"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.45 }}
          />
          <motion.path
            d="M600 170 C640 225, 652 265, 660 305"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.45 }}
          />
        </svg>

        <motion.div
          className="absolute left-[18%] top-[43%] h-2.5 w-2.5 rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.45)]"
          animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.35, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[26%] top-[28%] h-2 w-2 rounded-full bg-white/55"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[27%] top-[66%] h-2 w-2 rounded-full bg-white/45"
          animate={{ opacity: [0.2, 0.75, 0.2] }}
          transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[18%] top-[43%] h-2.5 w-2.5 rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.45)]"
          animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.35, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[26%] top-[28%] h-2 w-2 rounded-full bg-white/55"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[27%] top-[66%] h-2 w-2 rounded-full bg-white/45"
          animate={{ opacity: [0.2, 0.75, 0.2] }}
          transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.65)]" />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.55)]" />
        </motion.div>

        <motion.button
          type="button"
          onClick={onEnterTree}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10"
        >
          <span className="text-base font-light md:text-lg">The Tree</span>
        </motion.button>
      </div>
    </motion.div>
  );
}