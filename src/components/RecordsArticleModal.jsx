import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function RecordsArticleModal({ article, onClose }) {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
  }, [article]);

  useEffect(() => {
    if (!article) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") {
        setPageIndex((prev) =>
          prev === article.pages.length - 1 ? 0 : prev + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setPageIndex((prev) =>
          prev === 0 ? article.pages.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [article, onClose]);

  if (!article) return null;

  const currentPage = article.pages[pageIndex];

  const currentImages = useMemo(() => {
    if (Array.isArray(currentPage.images) && currentPage.images.length > 0) {
      return currentPage.images;
    }

    if (currentPage.image) {
      return [currentPage.image];
    }

    return [];
  }, [currentPage]);

  const goPrev = () => {
    setPageIndex((prev) => (prev === 0 ? article.pages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setPageIndex((prev) => (prev === article.pages.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        key={`article-modal-${article.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] bg-black/78 backdrop-blur-md"
        onClick={onClose}
      >
        <div className="absolute inset-0 overflow-y-auto">
          <div className="min-h-full px-4 py-6 md:px-8 md:py-8">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.985 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto max-w-6xl rounded-[2rem] border border-[#b68a57]/28 bg-[#1b120c]/95 shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_0_40px_rgba(255,220,180,0.03)]"
            >
              <div className="sticky top-0 z-20 rounded-t-[2rem] border-b border-[#b68a57]/18 bg-[#1b120c]/92 px-5 py-4 backdrop-blur-xl md:px-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.26em] text-[#d9bf8e]/60">
                      {article.year} · {article.label}
                    </div>

                    <h3 className="mt-3 font-serif text-3xl text-[#f2dfb7] md:text-4xl">
                      {article.title}
                    </h3>

                    <div className="mt-2 text-sm text-[#e8d6b0]/52">
                      {article.subtitle}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={goPrev}
                      className="h-11 rounded-full border border-[#b68a57]/24 bg-[#2b1c12]/65 px-5 text-sm text-[#f0ddb4] transition hover:bg-[#382419]"
                    >
                      Prev
                    </button>

                    <button
                      onClick={goNext}
                      className="h-11 rounded-full border border-[#b68a57]/24 bg-[#2b1c12]/65 px-5 text-sm text-[#f0ddb4] transition hover:bg-[#382419]"
                    >
                      Next
                    </button>

                    <button
                      onClick={onClose}
                      className="h-11 rounded-full border border-[#b68a57]/24 bg-[#2b1c12]/65 px-5 text-sm text-[#f0ddb4] transition hover:bg-[#382419]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="border-b border-[#b68a57]/12 lg:border-b-0 lg:border-r lg:border-[#b68a57]/12">
                  <div className="p-5 md:p-7">
                    <div className="grid gap-4">
                      {currentImages.length > 0 ? (
                        currentImages.map((imageSrc, imageIndex) => (
                          <div
                            key={`${article.id}-${pageIndex}-image-${imageIndex}`}
                            className="overflow-hidden rounded-[1.5rem] border border-[#b68a57]/18 bg-[#24170f]/55 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]"
                          >
                            <div className="aspect-[4/5] bg-[#120b07]">
                              <img
                                src={imageSrc}
                                alt={`${currentPage.title} image ${imageIndex + 1}`}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="overflow-hidden rounded-[1.5rem] border border-[#b68a57]/18 bg-[#24170f]/55 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]">
                          <div className="flex aspect-[4/5] items-center justify-center bg-[#120b07] text-sm text-[#d9bf8e]/45">
                            No image available
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 rounded-[1.3rem] border border-[#b68a57]/14 bg-[#24170f]/45 p-4">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-[#d9bf8e]/58">
                        Page
                      </div>
                      <div className="mt-2 text-sm text-[#ead7b0]/72">
                        {String(pageIndex + 1).padStart(2, "0")} /{" "}
                        {String(article.pages.length).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-h-[80vh] overflow-y-auto px-5 py-5 md:px-8 md:py-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${article.id}-${pageIndex}`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.22 }}
                      className="max-w-3xl"
                    >
                      <div className="text-[11px] uppercase tracking-[0.22em] text-[#d9bf8e]/58">
                        {currentPage.subtitle}
                      </div>

                      <h4 className="mt-3 font-serif text-3xl text-[#f1deba] md:text-4xl">
                        {currentPage.title}
                      </h4>

                      <p className="mt-6 text-sm leading-8 text-[#ead7b0]/78 md:text-[15px] whitespace-pre-line">
                        {currentPage.content}
                      </p>

                      <div className="mt-8 flex items-center gap-2">
                        {article.pages.map((_, index) => (
                          <div
                            key={index}
                            className={`h-2.5 rounded-full transition-all ${
                              index === pageIndex
                                ? "w-8 bg-[#ead7b0]"
                                : "w-2.5 bg-[#ead7b0]/22"
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}