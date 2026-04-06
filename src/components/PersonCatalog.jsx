import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function PersonDetailModal({
  person,
  slideIndex,
  onPrev,
  onNext,
  onClose,
}) {
  if (!person) return null;

  const currentSlide = person.slides[slideIndex];

  return (
    <AnimatePresence>
      <motion.div
        key={`person-modal-${person.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <div className="absolute inset-0 overflow-y-auto">
          <div className="min-h-full px-4 py-6 md:px-8 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#0a0c11]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="sticky top-0 z-20 flex items-center justify-between gap-4 rounded-t-[2rem] border-b border-white/10 bg-[#0a0c11]/90 px-5 py-4 backdrop-blur-xl md:px-8">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                    Family archive entry
                  </div>
                  <h3 className="mt-1 text-2xl font-light text-white/95 md:text-3xl">
                    {person.name}
                  </h3>
                  <div className="mt-1 text-sm text-white/45">
                    {person.year} · {person.type}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onPrev}
                    className="h-11 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    Prev
                  </button>
                  <button
                    onClick={onNext}
                    className="h-11 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    Next
                  </button>
                  <button
                    onClick={onClose}
                    className="h-11 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
                  <div className="p-5 md:p-7">
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
                      <div className="aspect-[4/5] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                        {currentSlide.image ? (
                          <img
                            src={currentSlide.image}
                            alt={currentSlide.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center px-8 text-center">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                              Image slot
                            </div>
                            <div className="mt-4 text-2xl font-light text-white/75">
                              {person.name}
                            </div>
                            <div className="mt-2 text-sm text-white/45">
                              Add image later to this slide
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-h-[80vh] overflow-y-auto px-5 py-5 md:px-8 md:py-7">
                  <div className="max-w-3xl">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                      {currentSlide.subtitle}
                    </div>

                    <h4 className="mt-3 text-3xl font-light tracking-[-0.03em] text-white/95 md:text-4xl">
                      {currentSlide.title}
                    </h4>

                    <p className="mt-4 text-base leading-8 text-white/58 md:text-lg">
                      {person.summary}
                    </p>

                    <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
                      <p className="text-sm leading-8 text-white/72 md:text-[15px]">
                        {currentSlide.content}
                      </p>
                    </div>

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

                    <div className="mt-4 text-sm text-white/45">
                      {String(slideIndex + 1).padStart(2, "0")} /{" "}
                      {String(person.slides.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PersonCatalog({
  timelinePeople,
  activePerson,
  activeSlideIndex,
  setActivePersonId,
  goToPrevSlide,
  goToNextSlide,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-white/40">
            Family catalog
          </div>
          <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
            Explore the archive through individual family cards. Select a person
            to open a full entry with image and text pages.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {timelinePeople.map((person) => {
            const isActive = activePerson?.id === person.id;

            return (
              <motion.button
                key={person.id}
                type="button"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setActivePersonId(person.id);
                  setIsModalOpen(true);
                }}
                className={`group relative overflow-hidden rounded-[1.6rem] border p-5 text-left transition-all ${
                  isActive
                    ? "border-white/20 bg-white/[0.07] shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_58%)]" />

                <div className="relative z-10 flex min-h-[190px] flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                      Archive card
                    </div>

                    <h3 className="mt-4 text-2xl font-light leading-tight text-white/92">
                      {person.name}
                    </h3>

                    <div className="mt-3 text-sm text-white/50">
                      {person.year} · {person.type}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="text-sm text-white/55">
                      {person.slides.length} pages
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                      Open
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <PersonDetailModal
          person={activePerson}
          slideIndex={activeSlideIndex}
          onPrev={goToPrevSlide}
          onNext={goToNextSlide}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}