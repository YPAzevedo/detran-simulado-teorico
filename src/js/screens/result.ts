import { state } from "@/state.js";
import { saveProgress } from "@/storage.js";
import { switchScreen, el, make } from "@/utils.js";
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

  const fragment = document.createDocumentFragment();
  state.answers.forEach((a, idx) => {
    const correctText = a.q.opts[a.q.correct] ?? "";
    const userText = a.picked === -1 ? "(pulada)" : (a.q.opts[a.picked] ?? "");
    const item = make("div", { class: "review-item" });

    const head = make("div", { class: "review-head" });
    head.append(
      make("span", {
        text: `Questão ${String(idx + 1).padStart(2, "0")} · ${a.q.tag === "DD" ? "Defensiva" : "Socorros"}`,
      }),
      make("span", {
        class: `right ${a.wasCorrect ? "ok" : "no"}`,
        text: a.wasCorrect ? "✓ Acertou" : "✗ Errou",
      }),
    );

    const ans = make("div", { class: "review-ans" });
    ans.append(
      make("span", { class: "lab", text: "Sua resposta" }),
      document.createTextNode(userText),
      make("span", { class: "lab", text: "Resposta correta" }),
      document.createTextNode(correctText),
      make("span", { class: "lab", text: "Por quê" }),
      document.createTextNode(a.q.exp),
    );

    item.append(head, make("p", { class: "review-q", text: a.q.q }), ans);
    fragment.appendChild(item);
  });
  el("review-list").replaceChildren(fragment);

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
