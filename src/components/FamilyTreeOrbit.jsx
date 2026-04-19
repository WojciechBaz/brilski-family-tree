import { motion } from "motion/react";

const ORBIT_RINGS = [
  { radius: 92, duration: 26, items: ["1844", "1870", "1901"] },
  { radius: 152, duration: 42, items: ["1850", "1880", "1910", "1930"] },
  { radius: 214, duration: 62, items: ["1950", "1975", "1990", "2020"] },
];

function OrbitRing({ radius, duration, items, reverse = false }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full border border-[#b68a57]/16"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {items.map((item, index) => {
        const angle = (360 / items.length) * index;

        return (
          <div
            key={`${radius}-${item}-${index}`}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translateY(-${radius}px) translateX(-50%)`,
              transformOrigin: "center center",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ead7b0]/70 shadow-[0_0_12px_rgba(234,215,176,0.28)]" />
              <div className="rounded-full border border-[#b68a57]/14 bg-[#2b1c12]/65 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#e7cf9e]/70 backdrop-blur-sm">
                {item}
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function FamilyTreeOrbit({ onEnterTree }) {
  return (
    <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[2.2rem] border border-[#b68a57]/24 bg-[linear-gradient(180deg,rgba(70,46,29,0.58),rgba(25,15,10,0.72))] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-7">
      <div className="text-[11px] uppercase tracking-[0.32em] text-[#d9bf8e]/62">
        Explore the lineage
      </div>

      <div className="relative mt-4 flex-1 overflow-hidden rounded-[1.8rem] border border-[#b68a57]/14 bg-[radial-gradient(circle_at_center,rgba(210,170,110,0.08),transparent_28%),linear-gradient(180deg,rgba(44,28,18,0.62),rgba(22,14,9,0.7))] min-h-[420px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,220,180,0.04),transparent_42%)]" />

        <svg
          viewBox="0 0 500 420"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="250"
            y1="210"
            x2="250"
            y2="24"
            stroke="rgba(234,215,176,0.12)"
            strokeWidth="1"
            initial={{ opacity: 0.25 }}
            animate={{ opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="250"
            y1="210"
            x2="250"
            y2="396"
            stroke="rgba(234,215,176,0.08)"
            strokeWidth="1"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.06, 0.12, 0.06] }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
          <motion.line
            x1="250"
            y1="210"
            x2="48"
            y2="210"
            stroke="rgba(234,215,176,0.08)"
            strokeWidth="1"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.05, 0.11, 0.05] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          <motion.line
            x1="250"
            y1="210"
            x2="452"
            y2="210"
            stroke="rgba(234,215,176,0.08)"
            strokeWidth="1"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.05, 0.11, 0.05] }}
            transition={{
              duration: 5.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />
          <motion.line
            x1="250"
            y1="210"
            x2="102"
            y2="86"
            stroke="rgba(234,215,176,0.09)"
            strokeWidth="1"
            initial={{ opacity: 0.14 }}
            animate={{ opacity: [0.05, 0.12, 0.05] }}
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          <motion.line
            x1="250"
            y1="210"
            x2="398"
            y2="86"
            stroke="rgba(234,215,176,0.09)"
            strokeWidth="1"
            initial={{ opacity: 0.14 }}
            animate={{ opacity: [0.05, 0.12, 0.05] }}
            transition={{
              duration: 5.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
          />
          <motion.line
            x1="250"
            y1="210"
            x2="102"
            y2="334"
            stroke="rgba(234,215,176,0.07)"
            strokeWidth="1"
            initial={{ opacity: 0.12 }}
            animate={{ opacity: [0.04, 0.09, 0.04] }}
            transition={{
              duration: 5.9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            }}
          />
          <motion.line
            x1="250"
            y1="210"
            x2="398"
            y2="334"
            stroke="rgba(234,215,176,0.07)"
            strokeWidth="1"
            initial={{ opacity: 0.12 }}
            animate={{ opacity: [0.04, 0.09, 0.04] }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </svg>

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(234,215,176,0.12),transparent)]" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[linear-gradient(to_right,transparent,rgba(234,215,176,0.08),transparent)]" />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            boxShadow: [
              "0 0 0 rgba(234,215,176,0)",
              "0 0 80px rgba(234,215,176,0.05)",
              "0 0 0 rgba(234,215,176,0)",
            ],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <OrbitRing
          radius={ORBIT_RINGS[0].radius}
          duration={ORBIT_RINGS[0].duration}
          items={ORBIT_RINGS[0].items}
        />
        <OrbitRing
          radius={ORBIT_RINGS[1].radius}
          duration={ORBIT_RINGS[1].duration}
          items={ORBIT_RINGS[1].items}
          reverse
        />
        <OrbitRing
          radius={ORBIT_RINGS[2].radius}
          duration={ORBIT_RINGS[2].duration}
          items={ORBIT_RINGS[2].items}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7bb86]/22 bg-[radial-gradient(circle_at_center,rgba(234,215,176,0.18),rgba(58,38,24,0.8))] shadow-[0_0_24px_rgba(234,215,176,0.06)]"
          animate={{
            scale: [1, 1.035, 1],
            boxShadow: [
              "0 0 18px rgba(234,215,176,0.06)",
              "0 0 34px rgba(234,215,176,0.14)",
              "0 0 18px rgba(234,215,176,0.06)",
            ],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.button
          onClick={onEnterTree}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="absolute left-1/2 top-1/2 z-10 flex h-[108px] w-[108px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e4c58f]/28 bg-[#2f1e13]/82 px-4 text-center text-lg font-medium text-[#f2dfb7] shadow-[0_0_18px_rgba(234,215,176,0.08)] transition hover:bg-[#3a2618]"
        >
          <span className="font-serif leading-tight">Family Tree</span>
        </motion.button>

        <motion.div
          className="absolute left-1/2 top-[13%] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#ead7b0]/85 shadow-[0_0_16px_rgba(234,215,176,0.4)]"
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.25, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[16%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#ead7b0]/48"
          animate={{ opacity: [0.25, 0.75, 0.25] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[16%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#ead7b0]/48"
          animate={{ opacity: [0.25, 0.75, 0.25] }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
      </div>
    </div>
  );
}