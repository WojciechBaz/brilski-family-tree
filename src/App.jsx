import { useMemo, useState } from "react";
import { AnimatePresence } from "motion/react";
import timelinePeople from "./data/timelinePeople";
import HomeScreen from "./components/HomeScreen";
import ArchiveScreen from "./components/ArchiveScreen";
import TreeScreen from "./components/TreeScreen";

export default function App() {
  const [view, setView] = useState("home");
  const [activePersonId, setActivePersonId] = useState(timelinePeople[3].id);
  const [slideMap, setSlideMap] = useState(() =>
    Object.fromEntries(timelinePeople.map((p) => [p.id, 0]))
  );

  const activePerson =
    useMemo(
      () =>
        timelinePeople.find((person) => person.id === activePersonId) ??
        timelinePeople[0],
      [activePersonId]
    ) ?? timelinePeople[0];

  const activeSlideIndex = slideMap[activePerson.id] ?? 0;

  const goToPrevSlide = () => {
    setSlideMap((prev) => {
      const current = prev[activePerson.id] ?? 0;
      const nextIndex =
        current === 0 ? activePerson.slides.length - 1 : current - 1;

      return {
        ...prev,
        [activePerson.id]: nextIndex,
      };
    });
  };

  const goToNextSlide = () => {
    setSlideMap((prev) => {
      const current = prev[activePerson.id] ?? 0;
      const nextIndex =
        current === activePerson.slides.length - 1 ? 0 : current + 1;

      return {
        ...prev,
        [activePerson.id]: nextIndex,
      };
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#21170f] text-[#ead7b0]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,223,183,0.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(120,84,52,0.14),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(180,140,90,0.08),transparent_20%),linear-gradient(to_bottom,#2a1c12,#19110b,#120b07)]" />

      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_160px_rgba(8,5,2,0.7)]" />

      <main className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
          {view === "home" && (
            <HomeScreen key="home-screen" onEnter={() => setView("archive")} />
          )}

          {view === "archive" && (
            <ArchiveScreen
              key="archive-screen"
              activePerson={activePerson}
              activeSlideIndex={activeSlideIndex}
              setActivePersonId={setActivePersonId}
              goToPrevSlide={goToPrevSlide}
              goToNextSlide={goToNextSlide}
              onBack={() => setView("home")}
              onEnterTree={() => setView("tree")}
              timelinePeople={timelinePeople}
            />
          )}

          {view === "tree" && (
            <TreeScreen
              key="tree-screen"
              onBackToArchive={() => setView("archive")}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}