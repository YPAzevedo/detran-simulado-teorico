import type { Progress } from "@/types.js";

const KEY = "cnh-progress";

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Progress) : { done: {}, bestPct: 0 };
  } catch {
    return { done: {}, bestPct: 0 };
  }
}

export function saveProgress(progress: Progress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    /* storage indisponível — silencioso */
  }
}
