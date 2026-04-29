"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const element = document.documentElement;
      const scrollTop = element.scrollTop || document.body.scrollTop;
      const scrollable = element.scrollHeight - element.clientHeight;
      setProgress(scrollable > 0 ? Math.min(100, (scrollTop / scrollable) * 100) : 0);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-8 top-72 z-40 hidden h-56 w-px bg-border xl:block 2xl:right-[calc((100vw-1536px)/2+11rem)]"
    >
      <div
        className="w-px rounded-full bg-primary shadow-[0_0_18px_rgba(0,200,255,0.45)] transition-[height] duration-150 ease-out"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
