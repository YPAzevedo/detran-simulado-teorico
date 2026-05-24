import { SIMULADOS } from "@/data/simulados.js";
import { state } from "@/state.js";
import { startSim } from "@/screens/quiz.js";

export function renderHome(){
  document.getElementById('stat-total').textContent = SIMULADOS.length;
  const doneCount = Object.keys(state.progress.done).length;
  document.getElementById('stat-feitos').textContent = doneCount;
  document.getElementById('stat-melhor').textContent = state.progress.bestPct ? state.progress.bestPct + '%' : '—';

  const list = document.getElementById('sim-list');
  list.innerHTML = '';
  SIMULADOS.forEach(s => {
    const done = state.progress.done[s.id];
    const card = document.createElement('button');
    card.className = 'sim-card';
    card.innerHTML = `
      ${done ? `<span class="badge-done">Feito · ${done.pct}%</span>` : ''}
      <div class="sim-card-head">
        <span class="sim-num">N°${String(s.id).padStart(2,'0')}</span>
        <span class="sim-badge ${s.badge}">${s.badgeText}</span>
      </div>
      <h3 class="sim-title">${s.name}</h3>
      <p class="sim-desc">${s.desc}</p>
      <div class="sim-meta">
        <span>· ${s.count} QUESTÕES</span>
        <span>· APROVAÇÃO 70%</span>
      </div>
    `;
    card.addEventListener('click', () => startSim(s));
    list.appendChild(card);
  });
}
