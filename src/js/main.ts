import { state } from "@/state.js";
import { loadProgress } from "@/storage.js";
import { renderHome } from "@/screens/home.js";
import { initQuiz } from "@/screens/quiz.js";
import { initResult } from "@/screens/result.js";

state.progress = loadProgress();
initQuiz();
initResult();
renderHome();
