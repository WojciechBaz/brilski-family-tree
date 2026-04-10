import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import FamilyTreeOrbit from "./FamilyTreeOrbit";
import RecordsArticleModal from "./RecordsArticleModal";
import ARCHIVE_CHAPTERS, { SPECIAL_ARTICLES } from "../data/sideInfoPanels";

const HOME_AUDIO = `${import.meta.env.BASE_URL}audio/freesound_community-dark-loops-058-harp-piano-long-loop-60-bpm-17254.mp3`;

export default function ArchiveScreen({
  onBack,
  onEnterTree,
  onPlayChapterAudio,
  onPauseAudio,
  onPlayHomeAudio,
  isMuted,
  toggleMute,
  isPlaying,
  currentTrack,
}) {
  const [activeChapterId, setActiveChapterId] = useState("old-poland");
  const [activeItemMap, setActiveItemMap] = useState(() =>
    Object.fromEntries(
      ARCHIVE_CHAPTERS.map((chapter) => [chapter.id, chapter.items[0].id])
    )
  );
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY || 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeChapter =
    useMemo(
      () =>
        ARCHIVE_CHAPTERS.find((chapter) => chapter.id === activeChapterId) ??
        ARCHIVE_CHAPTERS[0],
      [activeChapterId]
    ) ?? ARCHIVE_CHAPTERS[0];

  const activeItemId =
    activeItemMap[activeChapter.id] ?? activeChapter.items[0].id;

  const activeItem =
    activeChapter.items.find((item) => item.id === activeItemId) ??
    activeChapter.items[0];

  const setActiveItem = (itemId) => {
    setActiveItemMap((prev) => ({
      ...prev,
      [activeChapter.id]: itemId,
    }));
  };

  const handleChapterClick = async (chapterId) => {
    setActiveChapterId(chapterId);
    await onPlayChapterAudio(chapterId);
  };

  const handlePlaybackToggle = async () => {
    if (isPlaying) {
      onPauseAudio();
      return;
    }

    if (currentTrack && !currentTrack.includes(HOME_AUDIO)) {
      await onPlayChapterAudio(activeChapterId);
      return;
    }

    await onPlayHomeAudio();
  };

  const openArticle = (article) => {
    if (article && Array.isArray(article.pages)) {
      setExpandedArticle(article);
    }
  };

  return (
    <>
      <div className="archive-background">
        <div
          className="archive-vine archive-vine-left"
          style={{
            transform: `translateY(${scrollOffset * -0.06}px) scale(${
              1 + Math.min(scrollOffset * 0.00003, 0.03)
            })`,
          }}
        />
        <div
          className="archive-vine archive-vine-right"
          style={{
            transform: `translateY(${scrollOffset * -0.095}px) scale(${
              1 + Math.min(scrollOffset * 0.00004, 0.04)
            })`,
          }}
        />

        <div
          className="archive-glow"
          style={{
            left: "7%",
            bottom: "14%",
            transform: `translateY(${scrollOffset * -0.1}px)`,
          }}
        />
        <div
          className="archive-glow"
          style={{
            left: "11%",
            bottom: "55%",
            animationDelay: "2s",
            transform: `translateY(${scrollOffset * -0.07}px)`,
          }}
        />
        <div
          className="archive-glow"
          style={{
            right: "9%",
            bottom: "18%",
            animationDelay: "1s",
            transform: `translateY(${scrollOffset * -0.11}px)`,
          }}
        />
        <div
          className="archive-glow"
          style={{
            right: "13%",
            bottom: "63%",
            animationDelay: "3s",
            transform: `translateY(${scrollOffset * -0.08}px)`,
          }}
        />
      </div>

      <div className="archive-paper-overlay" />

      <section className="relative z-10 min-h-screen px-6 py-10 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[2rem] border border-[#b68a57]/24 bg-[linear-gradient(180deg,rgba(70,46,29,0.58),rgba(25,15,10,0.72))] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-7">
              <div className="flex items-start justify-between gap-6">
                <div className="max-w-4xl">
                  <div className="text-[11px] uppercase tracking-[0.32em] text-[#d9bf8e]/62">
                    Enter the archive
                  </div>

                  <h1 className="mt-4 font-serif text-4xl text-[#f2dfb7] md:text-5xl">
                    Family Archive
                  </h1>

                  <p className="mt-5 max-w-3xl text-sm leading-8 text-[#e8d6b0]/70 md:text-base">
                    The archive is arranged in chapters. Choose a historical
                    period, then browse its family branches or articles through
                    the reader panel below.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={handlePlaybackToggle}
                      className="rounded-full border border-[#b68a57]/22 bg-[#2d1d12]/60 px-4 py-2 text-sm text-[#f0ddb4] transition hover:bg-[#372418]"
                    >
                      {isPlaying ? "Pause ambience" : "Play ambience"}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="rounded-full border border-[#b68a57]/22 bg-[#2d1d12]/60 px-4 py-2 text-sm text-[#f0ddb4] transition hover:bg-[#372418]"
                    >
                      {isMuted ? "Unmute" : "Mute"}
                    </button>
                  </div>

                  {SPECIAL_ARTICLES?.length > 0 && (
                    <div className="mt-10">
                      <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#d9bf8e]/58">
                        Side notes
                      </div>

                      <div className="grid gap-3 md:grid-cols-2">
                        {SPECIAL_ARTICLES.map((article) => (
                          <button
                            key={article.id}
                            onClick={() => openArticle(article)}
                            className="group relative overflow-hidden rounded-[1.35rem] border border-[#b68a57]/18 bg-[linear-gradient(180deg,rgba(56,36,24,0.56),rgba(29,18,12,0.7))] p-4 text-left transition hover:border-[#c79860]/28 hover:bg-[linear-gradient(180deg,rgba(64,42,28,0.62),rgba(33,21,14,0.76))]"
                          >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,187,134,0.08),transparent_50%)]" />
                            <div className="absolute inset-[1px] rounded-[1.25rem] border border-[#f1d9ac]/[0.04]" />

                            <div className="relative z-10">
                              <div className="text-[10px] uppercase tracking-[0.24em] text-[#d9bf8e]/58">
                                {article.label}
                              </div>

                              <div className="mt-2 font-serif text-xl leading-tight text-[#f0ddb4] md:text-[1.45rem]">
                                {article.title}
                              </div>

                              <div className="mt-2 text-sm leading-6 text-[#e8d6b0]/60">
                                {article.subtitle}
                              </div>

                              <div className="mt-4 inline-flex items-center rounded-full border border-[#b68a57]/18 bg-[#2d1d12]/44 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#ead7b0]/70">
                                Open article
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={onBack}
                  className="h-11 shrink-0 rounded-full border border-[#b68a57]/24 bg-[#2b1c12]/65 px-5 text-sm text-[#f0ddb4] transition hover:bg-[#382419]"
                >
                  Back
                </button>
              </div>
            </div>

            <FamilyTreeOrbit onEnterTree={onEnterTree} />
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {ARCHIVE_CHAPTERS.map((chapter) => {
              const isActive = chapter.id === activeChapterId;

              return (
                <button
                  key={chapter.id}
                  onClick={() => handleChapterClick(chapter.id)}
                  className={`group relative overflow-hidden rounded-[1.8rem] border px-6 py-6 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#c79860]/34 bg-[linear-gradient(180deg,rgba(76,50,31,0.72),rgba(42,26,16,0.8))] shadow-[0_0_40px_rgba(160,108,56,0.12),inset_0_0_30px_rgba(255,220,180,0.02)]"
                      : "border-[#b68a57]/18 bg-[linear-gradient(180deg,rgba(50,32,21,0.56),rgba(27,17,11,0.68))] hover:border-[#c79860]/26 hover:bg-[linear-gradient(180deg,rgba(60,40,26,0.62),rgba(34,21,14,0.72))]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,187,134,0.08),transparent_45%)]" />
                  <div className="absolute inset-[1px] rounded-[1.75rem] border border-[#f1d9ac]/[0.04]" />

                  <div className="relative z-10">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[#d9bf8e]/65">
                      {chapter.years}
                    </div>

                    <h2 className="mt-3 font-serif text-3xl text-[#f0ddb4]">
                      {chapter.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#e8d6b0]/68">
                      {chapter.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-[2rem] border border-[#b68a57]/22 bg-[linear-gradient(180deg,rgba(50,31,21,0.58),rgba(22,14,9,0.74))] p-6 shadow-[inset_0_0_50px_rgba(0,0,0,0.26)] backdrop-blur-sm md:p-8">
            <div className="mb-6">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#d9bf8e]/60">
                Chapter reader
              </div>

              <h3 className="mt-3 font-serif text-3xl text-[#f1deba]">
                {activeChapter.title}
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#e8d6b0]/68">
                {activeChapter.intro}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="relative">
                <div className="archive-timeline-scroll max-h-[540px] overflow-y-auto pr-2">
                  <div className="relative space-y-5">
                    <div className="absolute left-[18px] top-3 bottom-3 w-px bg-[linear-gradient(to_bottom,rgba(182,138,87,0.12),rgba(215,187,134,0.48),rgba(182,138,87,0.12))]" />

                    {activeChapter.items.map((item) => {
                      const isActive = item.id === activeItem.id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveItem(item.id)}
                          className="relative flex w-full items-start gap-4 text-left"
                        >
                          <div
                            className={`relative z-10 mt-1.5 h-9 w-9 shrink-0 rounded-full border transition-all ${
                              isActive
                                ? "border-[#e4c58f]/80 bg-[#e4c58f]/18 shadow-[0_0_20px_rgba(228,197,143,0.2)]"
                                : "border-[#b68a57]/24 bg-[#2c1b10]"
                            }`}
                          >
                            {isActive && (
                              <div className="absolute inset-2 rounded-full bg-[#ead7b0]" />
                            )}
                          </div>

                          <div
                            className={`w-full rounded-[1.4rem] border px-4 py-4 transition-all ${
                              isActive
                                ? "border-[#c79860]/26 bg-[linear-gradient(180deg,rgba(73,47,30,0.72),rgba(42,28,18,0.78))] shadow-[inset_0_0_20px_rgba(255,220,180,0.02)]"
                                : "border-transparent bg-transparent hover:border-[#b68a57]/16 hover:bg-[#2a1b11]/34"
                            }`}
                          >
                            <div className="text-[11px] uppercase tracking-[0.24em] text-[#d9bf8e]/58">
                              {item.year} · {item.label}
                            </div>

                            <div className="mt-2 text-lg text-[#f0ddb4]">
                              {item.title}
                            </div>

                            <div className="mt-2 text-sm text-[#e8d6b0]/48">
                              {item.subtitle}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-[1.7rem] border border-[#b68a57]/22 bg-[linear-gradient(180deg,rgba(76,50,31,0.62),rgba(33,21,14,0.7))] p-6 shadow-[inset_0_0_30px_rgba(255,220,180,0.02)] md:p-7"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="rounded-full border border-[#b68a57]/18 bg-[#2d1d12]/52 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#ead7b0]/58">
                      {activeItem.year}
                    </div>

                    <div className="rounded-full border border-[#b68a57]/18 bg-[#2d1d12]/52 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#ead7b0]/58">
                      {activeItem.label}
                    </div>
                  </div>

                  <h4 className="mt-5 font-serif text-4xl leading-tight text-[#f1deba]">
                    {activeItem.title}
                  </h4>

                  <div className="mt-3 text-sm text-[#e8d6b0]/52">
                    {activeItem.subtitle}
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-8 text-[#e8d6b0]/72 md:text-[15px]">
                    {activeItem.preview}
                  </p>

                  <div className="mt-7 rounded-[1.4rem] border border-[#b68a57]/16 bg-[#26180f]/55 p-5">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-[#d9bf8e]/58">
                      Article pages
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#e8d6b0]/68">
                      Open the full-screen reader to browse this family or
                      article page by page with image and text layout.
                    </p>
                  </div>

                  <button
                    onClick={() => openArticle(activeItem)}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#b68a57]/22 bg-[#2d1d12]/60 px-5 py-3 text-sm text-[#f0ddb4] transition hover:bg-[#372418]"
                  >
                    Open full article
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <RecordsArticleModal
        article={
          expandedArticle && Array.isArray(expandedArticle.pages)
            ? expandedArticle
            : null
        }
        onClose={() => setExpandedArticle(null)}
      />
    </>
  );
}