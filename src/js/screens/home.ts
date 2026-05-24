import { SIMULADOS } from "@/data/simulados.js";
import { state } from "@/state.js";
import { startSim } from "@/screens/quiz.js";
import { el } from "@/utils.js";

export function renderHome(): void {
  el("stat-total").textContent = String(SIMULADOS.length);
  const doneCount = Object.keys(state.progress.done).length;
  el("stat-feitos").textContent = String(doneCount);
  el("stat-melhor").textContent = state.progress.bestPct ? state.progress.bestPct + "%" : "—";

  const fragment = document.createDocumentFragment();
  SIMULADOS.forEach((s) => {
    const done = state.progress.done[s.id];
    const card = document.createElement("button");
    card.className = "sim-card";
    card.innerHTML = `
      ${done ? `<span class="badge-done">Feito · ${done.pct}%</span>` : ""}
      <div class="sim-card-head">
        <span class="sim-num">N°${String(s.id).padStart(2, "0")}</span>
        <span class="sim-badge ${s.badge}">${s.badgeText}</span>
      </div>
      <h3 class="sim-title">${s.name}</h3>
      <p class="sim-desc">${s.desc}</p>
      <div class="sim-meta">
        <span>· ${s.count} QUESTÕES</span>
        <span>· APROVAÇÃO 70%</span>
      </div>
    `;
    card.addEventListener("click", () => startSim(s));
    fragment.appendChild(card);
  });

  const list = el("sim-list");
  list.replaceChildren(fragment);
}
