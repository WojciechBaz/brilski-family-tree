import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import timelinePeople from "./data/timelinePeople";
import HomeScreen from "./components/HomeScreen";
import ArchiveScreen from "./components/ArchiveScreen";
import TreeScreen from "./components/TreeScreen";

const HOME_AUDIO = `${import.meta.env.BASE_URL}audio/freesound_community-dark-loops-058-harp-piano-long-loop-60-bpm-17254.mp3`;

const CHAPTER_AUDIO_MAP = {
  "old-poland": `${import.meta.env.BASE_URL}audio/freesound_community-village-79043.mp3`,
  "migration-times": `${import.meta.env.BASE_URL}audio/freesound_community-120616-boat-horn-harbour-tour-nyc-35905.mp3`,
  // "modern-times": `${import.meta.env.BASE_URL}audio/your-modern-track.mp3`,
};

export default function App() {
  const [view, setView] = useState("home");
  const [activePersonId, setActivePersonId] = useState(timelinePeople[3].id);
  const [slideMap, setSlideMap] = useState(() =>
    Object.fromEntries(timelinePeople.map((p) => [p.id, 0]))
  );

  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const playTrack = async (src, { loop = true, volume = 0.45, forceRestart = false } = {}) => {
    const audio = audioRef.current;
    if (!audio || !src) return false;

    try {
      const currentResolvedSrc = audio.currentSrc || audio.src || "";
      const shouldReplace = forceRestart || !currentResolvedSrc.includes(src);

      if (shouldReplace) {
        audio.src = src;
        audio.load();
      }

      audio.loop = loop;
      audio.volume = volume;
      audio.muted = isMuted;

      await audio.play();
      setCurrentTrack(src);
      setIsPlaying(true);
      return true;
    } catch (err) {
      console.warn("Audio play failed:", err);
      setIsPlaying(false);
      return false;
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  };

  const startHomeAudio = async ({ forceRestart = false } = {}) => {
    const ok = await playTrack(HOME_AUDIO, {
      loop: true,
      volume: 0.45,
      forceRestart,
    });

    if (ok) {
      setAudioUnlocked(true);
    }
  };

  const startChapterAudio = async (chapterId) => {
    const src = CHAPTER_AUDIO_MAP[chapterId];
    if (!src) return;

    const ok = await playTrack(src, {
      loop: true,
      volume: 0.55,
      forceRestart: false,
    });

    if (ok) {
      setAudioUnlocked(true);
    }
  };

  const toggleMuteGlobal = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  };

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
            <HomeScreen
              key="home-screen"
              onEnter={() => setView("archive")}
              onBegin={() => startHomeAudio({ forceRestart: true })}
              audioUnlocked={audioUnlocked}
            />
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
              onPlayChapterAudio={startChapterAudio}
              onPauseAudio={pauseAudio}
              onPlayHomeAudio={startHomeAudio}
              isMuted={isMuted}
              toggleMute={toggleMuteGlobal}
              isPlaying={isPlaying}
              currentTrack={currentTrack}
              homeTrack={HOME_AUDIO}
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