import React from "react";
import { motion } from "motion/react";

export default function TimelineCard({
  person,
  slideIndex,
  onPrev,
  onNext,
}) {
  const currentSlide = person.slides[slideIndex];

  return (
    <motion.div
      key={`${person.id}-${slideIndex}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 md:p-6 backdrop-blur-xl"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-white/40">
            Focused person
          </div>
          <h3 className="mt-2 text-2xl font-light text-white/95 md:text-3xl">
            {person.name}
          </h3>
          <div className="mt-2 text-sm text-white/55">
            {person.year} · {person.type}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            className="h-10 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white/80 transition-colors hover:bg-white/10"
          >
            Prev
          </button>
          <button
            onClick={onNext}
            className="h-10 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white/80 transition-colors hover:bg-white/10"
          >
            Next
          </button>
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65 md:text-base">
        {person.summary}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
        <div className="flex min-h-[220px] flex-col justify-between rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/35">
              {currentSlide.subtitle}
            </div>
            <div className="mt-3 text-2xl font-light text-white/92">
              {currentSlide.title}
            </div>
          </div>

          <div className="text-sm text-white/45">
            {String(slideIndex + 1).padStart(2, "0")} /{" "}
            {String(person.slides.length).padStart(2, "0")}
          </div>
        </div>

        <div className="flex min-h-[220px] flex-col justify-between rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
          <p className="text-sm leading-7 text-white/72 md:text-base">
            {currentSlide.content}
          </p>

          <div className="mt-6 flex items-center gap-2">
            {person.slides.map((_, index) => (
              <div
                key={index}
                className={`h-2.5 rounded-full transition-all ${
                  index === slideIndex ? "w-8 bg-white" : "w-2.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}