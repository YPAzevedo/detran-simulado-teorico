import { SIMULADOS } from "@/data/simulados.js";
import { state } from "@/state.js";
import { startSim } from "@/screens/quiz.js";
import { el, make } from "@/utils.js";

export function renderHome(): void {
  el("stat-total").textContent = String(SIMULADOS.length);
  const doneCount = Object.keys(state.progress.done).length;
  el("stat-feitos").textContent = String(doneCount);
  el("stat-melhor").textContent = state.progress.bestPct ? state.progress.bestPct + "%" : "—";

  const fragment = document.createDocumentFragment();
  SIMULADOS.forEach((s) => {
    const done = state.progress.done[s.id];
    const card = make("button", { class: "sim-card" });

    if (done) {
      card.appendChild(make("span", { class: "badge-done", text: `Feito · ${done.pct}%` }));
    }

    const head = make("div", { class: "sim-card-head" });
    head.append(
      make("span", { class: "sim-num", text: `N°${String(s.id).padStart(2, "0")}` }),
      make("span", { class: `sim-badge ${s.badge}`, text: s.badgeText }),
    );

    const meta = make("div", { class: "sim-meta" });
    meta.append(
      make("span", { text: `· ${s.count} QUESTÕES` }),
      make("span", { text: "· APROVAÇÃO 70%" }),
    );

    card.append(
      head,
      make("h3", { class: "sim-title", text: s.name }),
      make("p", { class: "sim-desc", text: s.desc }),
      meta,
    );
    card.addEventListener("click", () => startSim(s));
    fragment.appendChild(card);
  });

  el("sim-list").replaceChildren(fragment);
}
