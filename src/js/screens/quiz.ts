import { state } from "@/state.js";
import { pickQuestions, prepareQuestion, switchScreen, el } from "@/utils.js";
import { renderResult } from "@/screens/result.js";
import type { Simulado } from "@/types.js";

export function startSim(sim: Simulado): void {
  state.sim = sim;
  state.questions = pickQuestions(sim).map(prepareQuestion);
  state.current = 0;
  state.answers = [];
  state.score = 0;
  state.finished = false;

  el("quiz-name").textContent = sim.name;
  switchScreen("screen-quiz");
  renderQuestion();
}

function renderQuestion(): void {
  const q = state.questions[state.current];
  if (!q) return;
  const total = state.questions.length;

  el("q-counter").textContent =
    `Questão ${String(state.current + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  el("q-score").textContent = `Acertos: ${state.score}`;
  el("q-tag").textContent = q.tag === "DD" ? "Direção Defensiva" : "Primeiros Socorros";
  el("q-id").textContent = "#" + String(state.current + 1).padStart(3, "0");
  el("q-text").textContent = q.q;
  el("progress").style.width = (state.current / total) * 100 + "%";

  const letters = ["A", "B", "C", "D"];
  const fragment = document.createDocumentFragment();
  q.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span class="option-text">${opt}</span>`;
    btn.addEventListener("click", () => handleAnswer(i));
    fragment.appendChild(btn);
  });
  el("options").replaceChildren(fragment);

  el("explain").classList.remove("show");
  el<HTMLButtonElement>("btn-next").disabled = true;
  el<HTMLButtonElement>("btn-skip").disabled = false;
  el("btn-next").textContent = state.current === total - 1 ? "Finalizar →" : "Próxima →";
}

function handleAnswer(picked: number): void {
  const q = state.questions[state.current];
  if (!q) return;
  const opts = document.querySelectorAll<HTMLButtonElement>("#options .option");
  opts.forEach((node, i) => {
    node.disabled = true;
    if (i === q.correct) node.classList.add("correct");
    if (i === picked && picked !== q.correct) node.classList.add("wrong");
  });

  const wasCorrect = picked === q.correct;
  if (wasCorrect) state.score++;
  state.answers.push({ q, picked, wasCorrect });

  const expEl = el("explain");
  expEl.innerHTML = `<strong>${wasCorrect ? "Correto." : "Resposta errada."}</strong> ${q.exp}`;
  expEl.classList.add("show");

  el<HTMLButtonElement>("btn-next").disabled = false;
  el<HTMLButtonElement>("btn-skip").disabled = true;
}

function advance(): void {
  if (state.current < state.questions.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    renderResult();
  }
}

export function initQuiz(): void {
  el("btn-skip").addEventListener("click", () => {
    const q = state.questions[state.current];
    if (!q) return;
    state.answers.push({ q, picked: -1, wasCorrect: false });
    advance();
  });

  el("btn-next").addEventListener("click", advance);

  el("btn-exit").addEventListener("click", () => {
    if (confirm("Sair do simulado? Seu progresso atual será perdido.")) {
      switchScreen("screen-home");
    }
  });
}
