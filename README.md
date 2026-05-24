# Simulado Teórico — Renovação da CNH

Simulado online da prova teórica de renovação da CNH (Direção Defensiva, Primeiros Socorros e Legislação). Escrito em **TypeScript**, publicado como site estático no GitHub Pages.

**Acesso:** https://ypazevedo.github.io/detran-simulado-teorico/

## Como funciona

- 8 simulados (oficiais misto, treino por área, pegadinhas, maratona)
- Banco de questões consolidado (DETRAN-SP / CONTRAN Resolução 789/20)
- Alternativas e ordem das questões embaralhadas a cada tentativa
- Critério de aprovação: 70% (igual à prova real)
- Progresso e melhor pontuação salvos em `localStorage`

## Stack

TypeScript compilado para ES2022 puro (sem bundler, sem framework). O navegador usa [Import Maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) para resolver os bare specifiers (`@/...`) do código compilado — o `tsc` só remove tipos, os caminhos `@/` ficam intactos e são resolvidos em runtime.

```
src/
  index.html              # entry — markup + <script type="importmap">
  styles/main.css
  js/
    main.ts               # boot
    state.ts              # estado global
    storage.ts            # localStorage
    utils.ts              # shuffle / pickQuestions / switchScreen / el
    types.ts              # tipos compartilhados (Question, Simulado, AppState…)
    data/
      bank.ts             # banco de questões
      simulados.ts        # definições dos simulados
    screens/
      home.ts
      quiz.ts
      result.ts
tsconfig.json
package.json
.github/workflows/pages.yml
```

O build copia `src/index.html` + `src/styles/` para `dist/` e o `tsc` emite os `.js` em `dist/js/`. O Pages serve o `dist/`.

## Scripts

```bash
npm install         # instala typescript, oxlint, oxfmt
npm run build       # gera dist/
npm run typecheck   # tsc --noEmit
npm run lint        # oxlint
npm run lint:fix    # oxlint --fix
npm run fmt         # oxfmt --write
npm run fmt:check   # falha se algo precisa de format
npm run serve       # build + http-server em :8000
```

## CI

`.github/workflows/ci.yml` roda em pull requests para `main` e em pushes para `main`:

- `typecheck` — `tsc --noEmit`
- `lint` — `oxlint`
- `fmt` — `oxfmt --list-different` (falha se houver arquivos não formatados)

Módulos ES exigem ser servidos via HTTP (não `file://`). Use o `npm run serve` ou qualquer outro servidor estático apontando para `dist/`.

## Deploy

Push para `main` dispara o workflow `.github/workflows/pages.yml`, que instala dependências, roda o build e publica o `dist/` no GitHub Pages.

No primeiro deploy, habilite Pages em **Settings → Pages → Source: GitHub Actions**.

## Aviso

Questões consolidadas a partir do banco público do DETRAN-SP e da cartilha CONTRAN. Cada DETRAN estadual aplica sua própria prova, mas o conteúdo central (Direção Defensiva + Primeiros Socorros) é nacional.
