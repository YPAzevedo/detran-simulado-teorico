import { state } from "@/state.js";
import { saveProgress } from "@/storage.js";
import { switchScreen, el } from "@/utils.js";
import { renderHome } from "@/screens/home.js";
import { startSim } from "@/screens/quiz.js";

export function renderResult(): void {
  state.finished = true;
  const total = state.questions.length;
  const score = state.score;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 70;

  if (state.sim) {
    state.progress.done[state.sim.id] = { score, total, pct, at: Date.now() };
  }
  if (pct > state.progress.bestPct) state.progress.bestPct = pct;
  saveProgress(state.progress);

  const stamp = el("result-stamp");
  stamp.textContent = passed ? "Aprovado" : "Reprovado";
  stamp.className = "result-stamp " + (passed ? "pass" : "fail");

  el("result-score").textContent = String(score);
  el("result-frac").textContent = `de ${total} questões`;
  el("result-pct").textContent = pct + "%";

  let msg: string;
  if (pct === 100) msg = "Gabarito completo. Você passa nessa prova de olhos fechados.";
  else if (pct >= 90)
    msg = "Excelente — passaria com folga. Refaça os erros e está pronto pro Detran.";
  else if (pct >= 80) msg = "Bom desempenho. Revise as questões erradas e tente outro simulado.";
  else if (pct >= 70)
    msg = "Passou no critério dos 70%. Tente outros simulados para chegar mais confiante.";
  else if (pct >= 60) msg = "Quase lá. Foco nas questões erradas — refaça em alguns dias.";
  else
    msg =
      "Precisa de mais estudo. Refaça a revisão abaixo com calma e use o modo treino antes de tentar de novo.";
  el("result-msg").textContent = msg;

  const reviewList = el("review-list");
  reviewList.innerHTML = "";
  state.answers.forEach((a, idx) => {
    const correctText = a.q.opts[a.q.correct] ?? "";
    const userText = a.picked === -1 ? "(pulada)" : (a.q.opts[a.picked] ?? "");
    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div class="review-head">
        <span>Questão ${String(idx + 1).padStart(2, "0")} · ${a.q.tag === "DD" ? "Defensiva" : "Socorros"}</span>
        <span class="right ${a.wasCorrect ? "ok" : "no"}">${a.wasCorrect ? "✓ Acertou" : "✗ Errou"}</span>
      </div>
      <p class="review-q">${a.q.q}</p>
      <div class="review-ans">
        <span class="lab">Sua resposta</span>${userText}
        <span class="lab">Resposta correta</span>${correctText}
        <span class="lab">Por quê</span>${a.q.exp}
      </div>
    `;
    reviewList.appendChild(item);
  });

  switchScreen("screen-result");
}

export function initResult(): void {
  el("btn-home").addEventListener("click", () => {
    renderHome();
    switchScreen("screen-home");
  });
  el("btn-retry").addEventListener("click", () => {
    if (state.sim) startSim(state.sim);
  });
}
