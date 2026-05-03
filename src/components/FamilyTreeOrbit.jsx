import { motion } from "motion/react";

const ORBIT_RINGS = [
  { radius: 68, duration: 26, items: ["1844", "1870", "1901"] },
  { radius: 112, duration: 42, items: ["1850", "1880", "1910", "1930"] },
  { radius: 156, duration: 62, items: ["1950", "1975", "1990", "2020"] },
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
            <div className="flex flex-col items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-[#ead7b0]/70 shadow-[0_0_10px_rgba(234,215,176,0.26)]" />
              <div className="rounded-full border border-[#b68a57]/14 bg-[#2b1c12]/54 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[#e7cf9e]/70 backdrop-blur-sm">
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
    <div className="relative min-h-[330px] overflow-visible">
      <div className="relative min-h-[330px] overflow-visible">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(210,170,110,0.08),transparent_62%)]" />

        <svg
          viewBox="0 0 500 360"
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="250"
            y1="180"
            x2="250"
            y2="22"
            stroke="rgba(234,215,176,0.12)"
            strokeWidth="1"
            initial={{ opacity: 0.25 }}
            animate={{ opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="250"
            y1="180"
            x2="250"
            y2="338"
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
            y1="180"
            x2="54"
            y2="180"
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
            y1="180"
            x2="446"
            y2="180"
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
            y1="180"
            x2="104"
            y2="78"
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
            y1="180"
            x2="396"
            y2="78"
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
            y1="180"
            x2="104"
            y2="282"
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
            y1="180"
            x2="396"
            y2="282"
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

        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(234,215,176,0.12),transparent)]" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[linear-gradient(to_right,transparent,rgba(234,215,176,0.08),transparent)]" />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            boxShadow: [
              "0 0 0 rgba(234,215,176,0)",
              "0 0 64px rgba(234,215,176,0.045)",
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
          className="pointer-events-none absolute left-1/2 top-1/2 h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7bb86]/22 bg-[radial-gradient(circle_at_center,rgba(234,215,176,0.16),rgba(58,38,24,0.54),transparent_78%)] shadow-[0_0_22px_rgba(234,215,176,0.06)]"
          animate={{
            scale: [1, 1.035, 1],
            boxShadow: [
              "0 0 16px rgba(234,215,176,0.06)",
              "0 0 30px rgba(234,215,176,0.14)",
              "0 0 16px rgba(234,215,176,0.06)",
            ],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.button
          onClick={onEnterTree}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="absolute left-1/2 top-1/2 z-10 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e4c58f]/28 bg-[#2f1e13]/72 px-3 text-center text-base font-medium text-[#f2dfb7] shadow-[0_0_18px_rgba(234,215,176,0.08)] backdrop-blur-sm transition hover:bg-[#3a2618]/86"
        >
          <span className="font-serif leading-tight">
            Family
            <br />
            Tree
          </span>
        </motion.button>

        <motion.div
          className="absolute left-1/2 top-[12%] h-3 w-3 -translate-x-1/2 rounded-full bg-[#ead7b0]/85 shadow-[0_0_16px_rgba(234,215,176,0.4)]"
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.25, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[15%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#ead7b0]/48"
          animate={{ opacity: [0.25, 0.75, 0.25] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[15%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#ead7b0]/48"
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