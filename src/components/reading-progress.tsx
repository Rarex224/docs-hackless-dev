"use client";

import { useEffect } from "react";

export function ReadingProgress() {
  useEffect(() => {
    function updateProgress() {
      const element = document.documentElement;
      const scrollTop = element.scrollTop || document.body.scrollTop;
      const scrollable = element.scrollHeight - element.clientHeight;
      const progress = scrollable > 0 ? Math.min(100, (scrollTop / scrollable) * 100) : 0;
      element.style.setProperty("--docs-read-progress", `${progress}%`);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      document.documentElement.style.removeProperty("--docs-read-progress");
    };
  }, []);

  return null;
}
