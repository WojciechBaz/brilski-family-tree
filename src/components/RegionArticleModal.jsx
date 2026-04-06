import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { REGION_ARTICLE, REGION_IMAGES } from "../data/regionContent";

export default function RegionArticleModal({ isOpen, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  React.useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % REGION_IMAGES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setActiveImage((prev) => (prev + 1) % REGION_IMAGES.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage((prev) =>
          prev === 0 ? REGION_IMAGES.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentImage = REGION_IMAGES[activeImage];

  const goPrev = () => {
    setActiveImage((prev) =>
      prev === 0 ? REGION_IMAGES.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveImage((prev) => (prev + 1) % REGION_IMAGES.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="region-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md"
        onClick={onClose}
      >
        <div className="absolute inset-0 overflow-y-auto">
          <div className="min-h-full px-4 py-6 md:px-8 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#0a0c11]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="sticky top-0 z-20 flex items-center justify-between gap-4 rounded-t-[2rem] border-b border-white/10 bg-[#0a0c11]/90 px-5 py-4 backdrop-blur-xl md:px-8">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                    {REGION_ARTICLE.eyebrow}
                  </div>
                  <h3 className="mt-1 text-2xl font-light text-white/95 md:text-3xl">
                    {REGION_ARTICLE.title}
                  </h3>
                  <div className="mt-1 text-sm text-white/45">
                    {REGION_ARTICLE.subtitle}
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="h-11 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white transition-colors hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-0 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="border-b border-white/10 xl:border-b-0 xl:border-r xl:border-white/10">
                  <div className="relative">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImage.src}
                          src={currentImage.src}
                          alt={currentImage.title}
                          initial={{ opacity: 0.35, scale: 1.04 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0.35, scale: 1.02 }}
                          transition={{ duration: 0.5 }}
                          className="h-full w-full object-cover"
                        />
                      </AnimatePresence>

                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.58),transparent_45%)]" />

                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <div className="text-lg font-light text-white/95 md:text-xl">
                          {currentImage.title}
                        </div>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                          {currentImage.caption}
                        </p>
                      </div>

                      <button
                        onClick={goPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-sm text-white transition-colors hover:bg-black/55"
                      >
                        Prev
                      </button>

                      <button
                        onClick={goNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-sm text-white transition-colors hover:bg-black/55"
                      >
                        Next
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-3 md:p-5">
                      {REGION_IMAGES.map((image, index) => (
                        <button
                          key={image.src}
                          onClick={() => setActiveImage(index)}
                          className={`group overflow-hidden rounded-[1.1rem] border transition-all ${
                            index === activeImage
                              ? "border-white/35"
                              : "border-white/10"
                          }`}
                        >
                          <div className="aspect-[4/3] overflow-hidden bg-white/5">
                            <img
                              src={image.src}
                              alt={image.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="max-h-[80vh] overflow-y-auto px-5 py-5 md:px-8 md:py-7">
                  <div className="max-w-3xl">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                      Historical article
                    </div>

                    <h4 className="mt-3 text-3xl font-light tracking-[-0.03em] text-white/95 md:text-4xl">
                      Przasnysz and Leszno
                    </h4>

                    <p className="mt-3 text-base leading-8 text-white/58 md:text-lg">
                      A regional story of town life, rural continuity, and gradual
                      change.
                    </p>

                    <div className="mt-8 space-y-6">
                      {REGION_ARTICLE.content.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-sm leading-8 text-white/72 md:text-[15px]"
                        >
                          {paragraph}
                        </p>
                      ))}
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