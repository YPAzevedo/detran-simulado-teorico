import { state } from "@/state.js";
import { pickQuestions, prepareQuestion, switchScreen } from "@/utils.js";
import { renderResult } from "@/screens/result.js";

export function startSim(sim){
  state.sim = sim;
  state.questions = pickQuestions(sim).map(prepareQuestion);
  state.current = 0;
  state.answers = [];
  state.score = 0;
  state.finished = false;

  document.getElementById('quiz-name').textContent = sim.name;
  switchScreen('screen-quiz');
  renderQuestion();
}

function renderQuestion(){
  const q = state.questions[state.current];
  const total = state.questions.length;

  document.getElementById('q-counter').textContent = `Questão ${String(state.current+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
  document.getElementById('q-score').textContent = `Acertos: ${state.score}`;
  document.getElementById('q-tag').textContent = q.tag === 'DD' ? 'Direção Defensiva' : (q.tag === 'PS' ? 'Primeiros Socorros' : 'CTB / Legislação');
  document.getElementById('q-id').textContent = '#' + String(state.current+1).padStart(3,'0');
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('progress').style.width = ((state.current)/total*100) + '%';

  const optsEl = document.getElementById('options');
  optsEl.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span class="option-text">${opt}</span>`;
    btn.addEventListener('click', () => handleAnswer(i));
    optsEl.appendChild(btn);
  });

  document.getElementById('explain').classList.remove('show');
  document.getElementById('btn-next').disabled = true;
  document.getElementById('btn-skip').disabled = false;
  document.getElementById('btn-next').textContent = (state.current === total - 1) ? 'Finalizar →' : 'Próxima →';
}

function handleAnswer(picked){
  const q = state.questions[state.current];
  const opts = document.querySelectorAll('#options .option');
  opts.forEach((el, i) => {
    el.disabled = true;
    if(i === q.correct) el.classList.add('correct');
    if(i === picked && picked !== q.correct) el.classList.add('wrong');
  });

  const wasCorrect = picked === q.correct;
  if(wasCorrect) state.score++;
  state.answers.push({ q, picked, wasCorrect });

  const expEl = document.getElementById('explain');
  expEl.innerHTML = `<strong>${wasCorrect ? 'Correto.' : 'Resposta errada.'}</strong> ${q.exp}`;
  expEl.classList.add('show');

  document.getElementById('btn-next').disabled = false;
  document.getElementById('btn-skip').disabled = true;
}

function advance(){
  if(state.current < state.questions.length - 1){
    state.current++;
    renderQuestion();
  } else {
    renderResult();
  }
}

export function initQuiz(){
  document.getElementById('btn-skip').addEventListener('click', () => {
    const q = state.questions[state.current];
    state.answers.push({ q, picked: -1, wasCorrect: false });
    advance();
  });

  document.getElementById('btn-next').addEventListener('click', advance);

  document.getElementById('btn-exit').addEventListener('click', () => {
    if(confirm('Sair do simulado? Seu progresso atual será perdido.')){
      switchScreen('screen-home');
    }
  });
}
