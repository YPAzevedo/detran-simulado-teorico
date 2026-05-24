import { BANK } from "@/data/bank.js";
import type { Question, Simulado } from "@/types.js";

export function shuffle<T>(arr: readonly T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

export function pickQuestions(sim: Simulado): Question[] {
  let pool: Question[];
  if (sim.seedIdx) {
    pool = sim.seedIdx.map(i => BANK[i]).filter((q): q is Question => Boolean(q));
    return shuffle(pool).slice(0, sim.count);
  }
  if (sim.mode === "DD") pool = BANK.filter(q => q.tag === "DD");
  else if (sim.mode === "PS") pool = BANK.filter(q => q.tag === "PS");
  else pool = BANK.slice();
  return shuffle(pool).slice(0, Math.min(sim.count, pool.length));
}

// Embaralha alternativas mantendo o controle do índice correto
export function prepareQuestion(q: Question): Question {
  const indices = q.opts.map((_, i) => i);
  const order = shuffle(indices);
  const newOpts = order.map(i => q.opts[i]!);
  const newCorrect = order.indexOf(q.correct);
  return { ...q, opts: newOpts, correct: newCorrect };
}

export function switchScreen(id: string): void {
  document.querySelectorAll<HTMLElement>(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id)?.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function el<T extends HTMLElement = HTMLElement>(id: string): T {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Element #${id} not found`);
  return node as T;
}
