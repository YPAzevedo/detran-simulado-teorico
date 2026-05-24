export type Tag = "DD" | "PS";

export interface Question {
  tag: Tag;
  q: string;
  opts: string[];
  correct: number;
  exp: string;
}

export type SimuladoMode = "mixed" | "DD" | "PS";

export interface Simulado {
  id: number;
  name: string;
  desc: string;
  badge: string;
  badgeText: string;
  count: number;
  mode: SimuladoMode;
  seedIdx?: number[];
}

export interface Answer {
  q: Question;
  picked: number;
  wasCorrect: boolean;
}

export interface DoneRecord {
  score: number;
  total: number;
  pct: number;
  at: number;
}

export interface Progress {
  done: Record<number, DoneRecord>;
  bestPct: number;
}

export interface AppState {
  sim: Simulado | null;
  questions: Question[];
  current: number;
  answers: Answer[];
  score: number;
  finished: boolean;
  progress: Progress;
}
