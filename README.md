# Simulado Teórico — Renovação da CNH

Simulado online da prova teórica de renovação da CNH (Direção Defensiva, Primeiros Socorros e Legislação). 100% estático, sem build, publicado no GitHub Pages.

**Acesso:** https://ypazevedo.github.io/detran-simulado-teorico/

## Como funciona

- 8 simulados (oficiais misto, treino por área, pegadinhas, maratona)
- Banco de questões consolidado (DETRAN-SP / CONTRAN Resolução 789/20)
- Alternativas e ordem das questões embaralhadas a cada tentativa
- Critério de aprovação: 70% (igual à prova real)
- Progresso e melhor pontuação salvos em `localStorage`

## Stack

HTML + CSS + JavaScript puro (ES Modules), sem framework e sem etapa de build. Os módulos usam [Import Maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) para resolver bare specifiers (`@/...`) — funciona direto no navegador.

```
index.html          # entry, importmap + markup
styles/main.css     # estilos
js/
  main.js           # boot
  state.js          # estado global
  storage.js        # localStorage
  utils.js          # shuffle / pickQuestions / switchScreen
  data/
    bank.js         # banco de questões
    simulados.js    # definições dos simulados
  screens/
    home.js
    quiz.js
    result.js
```

## Rodando localmente

Módulos ES exigem servir via HTTP (não `file://`). Qualquer servidor estático funciona:

```bash
python3 -m http.server 8000
# ou
npx serve .
```

Abra `http://localhost:8000`.

## Deploy

Push para `main` dispara o workflow `.github/workflows/pages.yml`, que publica os arquivos no GitHub Pages.

Após o primeiro push, habilite Pages em **Settings → Pages → Source: GitHub Actions**.

## Aviso

As questões foram consolidadas a partir do banco público do DETRAN-SP e da cartilha CONTRAN. Cada DETRAN estadual aplica sua própria prova, mas o conteúdo central (Direção Defensiva + Primeiros Socorros) é nacional.
