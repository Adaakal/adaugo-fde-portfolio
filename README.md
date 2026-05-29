# adaugo-fde-portfolio

Portfolio application for the Deloitte Cyber Forward Deployed Engineer role.
Live at [adaugo-fde-portfolio.vercel.app](https://adaugo-fde-portfolio.vercel.app).

This repository is the portfolio. The brief lives at the top of the page, and
the chat box at the hero is a working LLM integration that answers questions
about my background using the Claude API, grounded in my application materials.

## What this proves, mapped to the JD

| JD requirement                                         | Where it shows up here                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------------------ |
| Full-stack with JavaScript/TypeScript, React, Next.js  | The entire app: Next.js 16 App Router, React 19, TypeScript strict       |
| Backend (Node.js)                                      | The `/api/ask` route runs as a Node serverless function on Vercel        |
| REST APIs                                              | `/api/ask` accepts POST with JSON, returns JSON. Standard REST           |
| Cloud deployment                                       | Deployed on Vercel, auto-deploys on push to `main`                       |
| Serverless                                             | The API route is a Vercel serverless function, not a long-running server |
| CI/CD, Git                                             | Every push to `main` triggers an automatic production deployment         |
| 1+ year GenAI/LLM in production                        | The chat box calls the Claude API live with a grounded system prompt     |
| 1+ year on a Frontier GenAI platform (Anthropic named) | Direct Anthropic SDK integration, model `claude-sonnet-4-20250514`       |

## Architecture

app/
├── page.tsx Server component, the main page
├── components/
│ └── AskBox.tsx Client component, the chat box UI
├── api/
│ └── ask/
│ └── route.ts Serverless endpoint, calls the Claude API
└── layout.tsx Root layout, Tailwind base styles

The page is a single server-rendered route. The chat box is a client component
so it can manage local state (input, loading, answer, error). The API route
runs server-side only, so the Anthropic API key never reaches the browser.

## How the chat box works

1. Visitor types a question, hits Ask.
2. `AskBox` POSTs to `/api/ask` with `{ question: string }`.
3. The route validates input length, calls the Anthropic SDK with a system
   prompt that grounds Claude in my actual resume, project briefs, and a
   strict set of refusal rules.
4. If the question is outside the grounded brief, the model returns the
   exact refusal line: `I don't have that answer and I will NOT hallucinate.`
5. The answer streams back as JSON and renders in the UI.

The grounding brief lives inline in `app/api/ask/route.ts`. The decision to
keep it inline rather than in a separate file is intentional: one file to
audit, one file to update, no risk of a stale copy.

## Honest framing

This portfolio holds itself to the framing in my application materials. Where
something is designed but not yet built, it says so. Where the scope of a
project is narrow, the narrow scope is named. Specifically:

- The Sweat Alliance taxonomy is in production. The full-stack ops extension
  on top of it is architected and designed, not built.
- The TikTok caption recovery runs only against my own authenticated session,
  recovering my own data that the official export omitted.

## Local development

```bash
npm install
cp .env.local.example .env.local   # then add your ANTHROPIC_API_KEY
npm run dev
```

The app runs at `http://localhost:3000`. The chat box requires
`ANTHROPIC_API_KEY` in `.env.local`. On Vercel, the same key is set as an
encrypted production environment variable.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS v4
- Anthropic TypeScript SDK
- Deployed on Vercel

## Contact

Adaugo Akaluso — adaugo.akaluso@gmail.com — [linkedin.com/in/adaugo-akaluso](https://linkedin.com/in/adaugo-akaluso)
