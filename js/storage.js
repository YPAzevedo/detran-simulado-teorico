const KEY = 'cnh-progress';

export function loadProgress(){
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : { done:{}, bestPct:0 };
  } catch {
    return { done:{}, bestPct:0 };
  }
}

export function saveProgress(progress){
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {}
}
