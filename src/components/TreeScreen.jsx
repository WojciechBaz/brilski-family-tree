import React, { useState } from "react";
import { motion } from "motion/react";

export default function TreeScreen({ onBackToArchive }) {
  const [zoom, setZoom] = useState(0.78);

  const clampValue = (v, min, max) => Math.max(min, Math.min(max, v));

  return (
    <motion.section
      key="tree"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen px-6 py-10 md:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/45">
              Lineage Map
            </div>
            <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] text-white/95 md:text-4xl lg:text-5xl">
              The Tree
            </h2>
          </div>

          <button
            onClick={onBackToArchive}
            className="h-11 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white transition-colors hover:bg-white/10"
          >
            Back to Archive
          </button>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl md:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.18em] text-white/40">
                SVG family layout
              </div>
              <p className="mt-3 text-sm leading-7 text-white/60 md:text-base">
                This version displays the exported SVG directly, preserving the
                exact arrangement from the Mermaid visual layout.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom((z) => clampValue(z - 0.1, 0.3, 2))}
                className="h-10 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white transition-colors hover:bg-white/10"
              >
                Zoom Out
              </button>
              <button
                onClick={() => setZoom(0.78)}
                className="h-10 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white transition-colors hover:bg-white/10"
              >
                Reset
              </button>
              <button
                onClick={() => setZoom((z) => clampValue(z + 0.1, 0.3, 2))}
                className="h-10 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white transition-colors hover:bg-white/10"
              >
                Zoom In
              </button>
            </div>
          </div>

          <div className="relative h-[82vh] min-h-[700px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%)]" />

            <motion.div
              drag
              dragElastic={0.03}
              dragMomentum={false}
              className="absolute left-6 top-6 cursor-grab active:cursor-grabbing"
              style={{
                scale: zoom,
                transformOrigin: "top left",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}genealogy-tree.svg`
                alt="Genealogy tree"
                draggable={false}
                className="pointer-events-none block max-w-none select-none"
                style={{
                  width: "4391px",
                  height: "1801px",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
