import type { AppState } from "@/types.js";

export const state: AppState = {
  sim: null,
  questions: [],
  current: 0,
  answers: [],
  score: 0,
  finished: false,
  progress: { done: {}, bestPct: 0 },
};
