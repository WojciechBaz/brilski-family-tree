import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const BG_IMAGE = `${import.meta.env.BASE_URL}images/brilski-sepia.png`

export default function HomeScreen({ onEnter }) {
  const [opening, setOpening] = useState(false);

  const handleEnter = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      onEnter();
    }, 1700);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(25,18,12,0.2),rgba(25,18,12,0.75))]" />
      <div className="absolute inset-0 bg-[#3b2818]/40 mix-blend-multiply" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(10,6,3,0.9)]" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-center"
        >
          <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-[#ead7b0]/70">
            Family Archive
          </div>

          <h1 className="font-serif text-5xl tracking-[0.08em] text-[#f2dfb7] sm:text-7xl md:text-8xl">
            The Brilski
            <span className="mt-2 block text-[#dcc08a]">History</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm text-[#f0dfbb]/80 sm:text-base">
            A quiet entrance into memory, migration, records, and lives carried
            across generations.
          </p>

          <button
            onClick={handleEnter}
            className="mt-10 rounded-full border border-[#d7bb86]/45 bg-[#2a1c12]/55 px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#f0ddb4] transition hover:bg-[#3a2818]/70"
          >
            {opening ? "Opening..." : "Enter the Archive"}
          </button>
        </motion.div>
      </div>

      {/* Opening gates */}
      <AnimatePresence>
        {opening && (
          <>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-102%" }}
              transition={{ duration: 1.7, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-y-0 left-0 z-30 w-1/2 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${BG_IMAGE})`,
                  backgroundPosition: "left center",
                }}
              />
              <div className="absolute inset-0 bg-[#2f2115]/28 mix-blend-multiply" />
              <div className="absolute inset-0 shadow-[inset_-18px_0_30px_rgba(0,0,0,0.45)]" />
            </motion.div>

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "102%" }}
              transition={{ duration: 1.7, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-y-0 right-0 z-30 w-1/2 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${BG_IMAGE})`,
                  backgroundPosition: "right center",
                }}
              />
              <div className="absolute inset-0 bg-[#2f2115]/28 mix-blend-multiply" />
              <div className="absolute inset-0 shadow-[inset_18px_0_30px_rgba(0,0,0,0.45)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.1] }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-0 top-0 left-1/2 z-40 w-[2px] -translate-x-1/2 bg-[#f3dfb2]"
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
