import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function getImageSrc(image) {
  if (!image) return null;
  if (typeof image === "string") return image;
  return image.src ?? image.url ?? null;
}

function getImageAlt(image, fallback) {
  if (!image) return fallback;
  if (typeof image === "string") return fallback;
  return image.alt ?? image.caption ?? fallback;
}

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

  const activeImageSrc = getImageSrc(activeImage);

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
    if (!article) return;

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

        if (pages.length > 0) {
          setPageIndex((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
        }

        return;
      }

      if (event.key === "ArrowLeft") {
        if (isImageExpanded && currentImages.length > 1) {
          setActiveImageIndex((prev) =>
            prev === 0 ? currentImages.length - 1 : prev - 1
          );
          return;
        }

        if (pages.length > 0) {
          setPageIndex((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    article,
    onClose,
    pages,
    isImageExpanded,
    currentImages.length,
  ]);

  useEffect(() => {
    if (article || isImageExpanded) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [article, isImageExpanded]);

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
          <div className="flex min-h-screen items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.985 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-[#b68a57]/28 bg-[#1b120c]/95 shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_0_40px_rgba(255,220,180,0.03)]"
            >
              <div className="shrink-0 border-b border-[#b68a57]/18 bg-[#1b120c]/92 px-5 py-4 backdrop-blur-xl md:px-8">
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
                    {pages.length > 1 && (
                      <>
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
                      </>
                    )}

                    <button
                      onClick={onClose}
                      className="h-11 rounded-full border border-[#b68a57]/24 bg-[#2b1c12]/65 px-5 text-sm text-[#f0ddb4] transition hover:bg-[#382419]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 md:px-8 md:py-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${article.id ?? "article"}-${safePageIndex}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                    className="mx-auto max-w-4xl"
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

                    {currentImages.length > 0 && (
                      <div className="mt-8 border-t border-[#b68a57]/16 pt-6">
                        <div className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#d9bf8e]/58">
                          Archive images
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          {currentImages.map((image, index) => {
                            const imageSrc = getImageSrc(image);
                            const imageAlt = getImageAlt(
                              image,
                              `${currentPage?.title ?? "Article"} image ${
                                index + 1
                              }`
                            );

                            if (!imageSrc) return null;

                            const isActive = index === activeImageIndex;

                            return (
                              <button
                                key={`${imageSrc}-${index}`}
                                type="button"
                                onClick={() => {
                                  setActiveImageIndex(index);
                                  setIsImageExpanded(true);
                                }}
                                className={`overflow-hidden rounded-[1.35rem] border bg-[#26180f]/55 text-left transition ${
                                  isActive
                                    ? "border-[#e4c58f]/60"
                                    : "border-[#b68a57]/16 hover:border-[#c79860]/30"
                                }`}
                              >
                                <div className="aspect-[4/3] overflow-hidden bg-[#1c110b]">
                                  <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="h-full w-full object-contain opacity-90 transition duration-500 hover:scale-[1.02] hover:opacity-100"
                                    draggable={false}
                                  />
                                </div>

                                {typeof image !== "string" &&
                                  (image.caption || image.alt) && (
                                    <div className="px-4 py-3 text-xs leading-5 text-[#e8d6b0]/55">
                                      {image.caption ?? image.alt}
                                    </div>
                                  )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {pages.length > 1 && (
                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#b68a57]/16 pt-6">
                        <button
                          onClick={goPrevPage}
                          className="rounded-full border border-[#b68a57]/22 bg-[#2d1d12]/60 px-5 py-3 text-sm text-[#f0ddb4] transition hover:bg-[#372418]"
                        >
                          Previous page
                        </button>

                        <div className="flex flex-wrap justify-center gap-2">
                          {pages.map((page, index) => (
                            <button
                              key={`${page.title ?? "page"}-${index}`}
                              onClick={() => setPageIndex(index)}
                              className={`h-9 min-w-9 rounded-full border px-3 text-xs transition ${
                                index === safePageIndex
                                  ? "border-[#e4c58f]/70 bg-[#e4c58f]/18 text-[#f5e4bd]"
                                  : "border-[#b68a57]/18 bg-[#2d1d12]/48 text-[#e8d6b0]/58 hover:bg-[#372418]"
                              }`}
                            >
                              {index + 1}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={goNextPage}
                          className="rounded-full border border-[#b68a57]/22 bg-[#2d1d12]/60 px-5 py-3 text-sm text-[#f0ddb4] transition hover:bg-[#372418]"
                        >
                          Next page
                        </button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isImageExpanded && activeImageSrc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[140] bg-black/92 backdrop-blur-md"
              onClick={() => setIsImageExpanded(false)}
            >
              <div className="flex h-full w-full items-center justify-center p-4 md:p-8">
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
                    src={activeImageSrc}
                    alt={getImageAlt(
                      activeImage,
                      currentPage?.title ?? "Expanded article image"
                    )}
                    className="max-h-full max-w-full rounded-[1.2rem] object-contain object-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                    draggable={false}
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