import { BANK } from "@/data/bank.js";

export function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

export function pickQuestions(sim){
  let pool;
  if(sim.seedIdx){
    pool = sim.seedIdx.map(i => BANK[i]).filter(Boolean);
    return shuffle(pool).slice(0, sim.count);
  }
  if(sim.mode === "DD") pool = BANK.filter(q => q.tag === "DD");
  else if(sim.mode === "PS") pool = BANK.filter(q => q.tag === "PS");
  else pool = BANK.slice();
  return shuffle(pool).slice(0, Math.min(sim.count, pool.length));
}

// Embaralha alternativas mantendo o controle do índice correto
export function prepareQuestion(q){
  const indices = q.opts.map((_,i) => i);
  const order = shuffle(indices);
  const newOpts = order.map(i => q.opts[i]);
  const newCorrect = order.indexOf(q.correct);
  return { ...q, opts: newOpts, correct: newCorrect };
}

export function switchScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}
