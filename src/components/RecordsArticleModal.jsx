import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function RecordsArticleModal({ article, onClose }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const pages = useMemo(() => {
    if (!article || !Array.isArray(article.pages)) return [];
    return article.pages;
  }, [article]);

  const safePageIndex = useMemo(() => {
    if (pages.length === 0) return 0;
    return Math.min(pageIndex, pages.length - 1);
  }, [pageIndex, pages]);

  const currentPage = useMemo(() => {
    if (pages.length === 0) return null;
    return pages[safePageIndex] ?? null;
  }, [pages, safePageIndex]);

  const currentImages = useMemo(() => {
    if (!currentPage) return [];

    if (Array.isArray(currentPage.images) && currentPage.images.length > 0) {
      return currentPage.images.filter(Boolean);
    }

    if (currentPage.image) {
      return [currentPage.image];
    }

    return [];
  }, [currentPage]);

  const activeImage = useMemo(() => {
    if (currentImages.length === 0) return null;
    return (
      currentImages[Math.min(activeImageIndex, currentImages.length - 1)] ??
      currentImages[0]
    );
  }, [currentImages, activeImageIndex]);

  useEffect(() => {
    setPageIndex(0);
    setActiveImageIndex(0);
    setIsImageExpanded(false);
  }, [article]);

  useEffect(() => {
    setActiveImageIndex(0);
    setIsImageExpanded(false);
  }, [safePageIndex]);

  useEffect(() => {
    if (!article || pages.length === 0) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (isImageExpanded) {
          setIsImageExpanded(false);
          return;
        }

        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        if (isImageExpanded && currentImages.length > 1) {
          setActiveImageIndex((prev) =>
            prev === currentImages.length - 1 ? 0 : prev + 1
          );
          return;
        }

        setPageIndex((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
        return;
      }

      if (event.key === "ArrowLeft") {
        if (isImageExpanded && currentImages.length > 1) {
          setActiveImageIndex((prev) =>
            prev === 0 ? currentImages.length - 1 : prev - 1
          );
          return;
        }

        setPageIndex((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [article, onClose, pages, isImageExpanded, currentImages.length]);

  const goPrevPage = () => {
    if (pages.length === 0) return;
    setPageIndex((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const goNextPage = () => {
    if (pages.length === 0) return;
    setPageIndex((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };

  const goPrevImage = () => {
    if (currentImages.length <= 1) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const goNextImage = () => {
    if (currentImages.length <= 1) return;
    setActiveImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  if (!article) return null;

  return (
    <AnimatePresence>
      <>
        <motion.div
          key={`article-modal-${article.id ?? "unknown"}`}
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
                className="mx-auto max-w-7xl rounded-[2rem] border border-[#b68a57]/28 bg-[#1b120c]/95 shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_0_40px_rgba(255,220,180,0.03)]"
              >
                <div className="sticky top-0 z-20 rounded-t-[2rem] border-b border-[#b68a57]/18 bg-[#1b120c]/92 px-5 py-4 backdrop-blur-xl md:px-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-4xl">
                      <div className="text-[11px] uppercase tracking-[0.26em] text-[#d9bf8e]/60">
                        {article.year ?? "Unknown year"} ·{" "}
                        {article.label ?? "Article"}
                      </div>

                      <h3 className="mt-3 font-serif text-3xl text-[#f2dfb7] md:text-4xl">
                        {article.title ?? "Untitled article"}
                      </h3>

                      <div className="mt-2 text-sm text-[#e8d6b0]/52">
                        {article.subtitle ?? ""}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={goPrevPage}
                        className="h-11 rounded-full border border-[#b68a57]/24 bg-[#2b1c12]/65 px-5 text-sm text-[#f0ddb4] transition hover:bg-[#382419]"
                      >
                        Prev
                      </button>

                      <button
                        onClick={goNextPage}
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

                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="border-b border-[#b68a57]/12 lg:border-b-0 lg:border-r lg:border-[#b68a57]/12">
                    <div className="p-5 md:p-7">
                      {activeImage ? (
                        <>
                          <div className="overflow-hidden rounded-[1.5rem] border border-[#b68a57]/18 bg-[#24170f]/55 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]">
                            <button
                              type="button"
                              onClick={() => setIsImageExpanded(true)}
                              className="block w-full cursor-zoom-in"
                              title="Open full image"
                            >
                              <div className="aspect-[4/5] bg-[#120b07]">
                                <img
                                  src={activeImage}
                                  alt={currentPage?.title ?? "Article image"}
                                  className="h-full w-full object-contain object-center"
                                />
                              </div>
                            </button>
                          </div>

                          <div className="mt-3 text-xs text-[#d9bf8e]/55">
                            Click the image to enlarge
                          </div>

                          {currentImages.length > 1 && (
                            <>
                              <div className="mt-4 flex items-center justify-between gap-3">
                                <button
                                  onClick={goPrevImage}
                                  className="rounded-full border border-[#b68a57]/22 bg-[#2d1d12]/60 px-4 py-2 text-sm text-[#f0ddb4] transition hover:bg-[#372418]"
                                >
                                  Prev image
                                </button>

                                <div className="text-sm text-[#ead7b0]/68">
                                  {String(activeImageIndex + 1).padStart(2, "0")}{" "}
                                  /{" "}
                                  {String(currentImages.length).padStart(2, "0")}
                                </div>

                                <button
                                  onClick={goNextImage}
                                  className="rounded-full border border-[#b68a57]/22 bg-[#2d1d12]/60 px-4 py-2 text-sm text-[#f0ddb4] transition hover:bg-[#372418]"
                                >
                                  Next image
                                </button>
                              </div>

                              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                                {currentImages.map((imageSrc, index) => {
                                  const isActive = index === activeImageIndex;

                                  return (
                                    <button
                                      key={`${imageSrc}-${index}`}
                                      onClick={() => setActiveImageIndex(index)}
                                      className={`overflow-hidden rounded-[1rem] border transition ${
                                        isActive
                                          ? "border-[#e4c58f]/70 shadow-[0_0_20px_rgba(228,197,143,0.15)]"
                                          : "border-[#b68a57]/18 hover:border-[#c79860]/28"
                                      }`}
                                    >
                                      <div className="aspect-square bg-[#120b07]">
                                        <img
                                          src={imageSrc}
                                          alt={`Thumbnail ${index + 1}`}
                                          className="h-full w-full object-cover"
                                        />
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </>
                          )}

                          <div className="mt-4 rounded-[1.3rem] border border-[#b68a57]/14 bg-[#24170f]/45 p-4">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-[#d9bf8e]/58">
                              Page
                            </div>

                            <div className="mt-2 text-sm text-[#ead7b0]/72">
                              {pages.length > 0
                                ? `${String(safePageIndex + 1).padStart(
                                    2,
                                    "0"
                                  )} / ${String(pages.length).padStart(2, "0")}`
                                : "No pages"}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="overflow-hidden rounded-[1.5rem] border border-[#b68a57]/18 bg-[#24170f]/55 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)]">
                          <div className="flex aspect-[4/5] items-center justify-center bg-[#120b07] text-sm text-[#d9bf8e]/45">
                            No image available
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="max-h-[80vh] overflow-y-auto px-5 py-5 md:px-8 md:py-7">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${article.id ?? "article"}-${safePageIndex}`}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.22 }}
                        className="max-w-3xl"
                      >
                        <div className="text-[11px] uppercase tracking-[0.22em] text-[#d9bf8e]/58">
                          {currentPage?.subtitle ?? "No subtitle"}
                        </div>

                        <h4 className="mt-3 font-serif text-3xl text-[#f1deba] md:text-4xl">
                          {currentPage?.title ?? "No page title"}
                        </h4>

                        <div className="mt-6 whitespace-pre-line text-sm leading-8 text-[#ead7b0]/78 md:text-[15px]">
                          {currentPage?.content ??
                            "No content available for this page yet."}
                        </div>

                        <div className="mt-8 flex items-center gap-2">
                          {pages.map((_, index) => (
                            <div
                              key={index}
                              className={`h-2.5 rounded-full transition-all ${
                                index === safePageIndex
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

        <AnimatePresence>
          {isImageExpanded && activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[140] bg-black/92 backdrop-blur-md"
              onClick={() => setIsImageExpanded(false)}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative flex h-full max-h-[92vh] w-full max-w-7xl items-center justify-center rounded-[1.8rem] border border-[#b68a57]/20 bg-[#120b07]/96 p-4 md:p-6"
                >
                  <button
                    onClick={() => setIsImageExpanded(false)}
                    className="absolute right-4 top-4 z-20 rounded-full border border-[#b68a57]/24 bg-[#2b1c12]/75 px-4 py-2 text-sm text-[#f0ddb4] transition hover:bg-[#382419]"
                  >
                    Close image
                  </button>

                  {currentImages.length > 1 && (
                    <>
                      <button
                        onClick={goPrevImage}
                        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#b68a57]/24 bg-[#2b1c12]/75 px-4 py-3 text-sm text-[#f0ddb4] transition hover:bg-[#382419]"
                      >
                        Prev
                      </button>

                      <button
                        onClick={goNextImage}
                        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#b68a57]/24 bg-[#2b1c12]/75 px-4 py-3 text-sm text-[#f0ddb4] transition hover:bg-[#382419]"
                      >
                        Next
                      </button>
                    </>
                  )}

                  <img
                    src={activeImage}
                    alt={currentPage?.title ?? "Expanded article image"}
                    className="max-h-full max-w-full rounded-[1.2rem] object-contain object-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                  />

                  {currentImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#b68a57]/24 bg-[#2b1c12]/75 px-4 py-2 text-sm text-[#ead7b0]/75">
                      {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                      {String(currentImages.length).padStart(2, "0")}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </AnimatePresence>
  );
}