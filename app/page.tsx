import AskBox from "./components/AskBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
          Portfolio — Deloitte Cyber FDE Application
        </p>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Adaugo Akaluso
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          I build working systems on Claude, Next.js, and Postgres. This
          portfolio is the proof.
        </p>
        <p className="text-base text-gray-600 leading-relaxed">
          Senior Program &amp; AI Systems Manager at Sweat Alliance. MS Computer
          Science, Stevens Institute of Technology. Based in Los Angeles.
        </p>
      </section>

      {/* Ask box */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <AskBox />
      </section>
      {/* Projects header */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <h2 className="text-3xl font-bold mb-2">Three projects</h2>
        <p className="text-gray-600">
          Each maps to a piece of the FDE stack. Where something is designed but
          not yet built, it says so.
        </p>
      </section>

      {/* Project 1: Movement Assessment System */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <article className="border border-gray-200 rounded-xl p-8">
          <div className="flex items-baseline justify-between mb-4 gap-4">
            <h3 className="text-2xl font-bold">
              Movement Assessment System (Sweat Alliance)
            </h3>
            <span className="shrink-0 text-xs uppercase tracking-wider text-green-700 bg-green-50 px-2 py-1 rounded">
              Live + Designed
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            The piece in production today is a controlled-vocabulary taxonomy
            and assessment record system built in Notion. It covers 7 movement
            patterns and 6 fault types, with 9 structured metadata fields per
            record. It replaced inconsistent free-text notes with a searchable,
            version-tracked schema and cut assessment review cycle time by about
            30 percent. Instructors use it as the standard for recording client
            assessments.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            On top of that working layer, I architected a full-stack operations
            extension. The studio runs across three disconnected SaaS tools:
            MarianaTek for scheduling and client info, Netgym for instructor
            schedules, and Gusto for payroll. The extension is designed to pull
            from all three into one role-based ops view rather than replace
            them. Architecture docs, ERD, and build plan are written and ready.
            The build itself has not started.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            I am also an instructor there, so I sit on both sides of the
            stakeholder relationship.
          </p>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Stack
            </p>
            <p className="text-sm text-gray-700">
              Working: Notion taxonomy in production. Designed: Next.js ·
              TypeScript · Neon Postgres · Prisma · Cloudflare R2 · role-based
              access
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Demonstrates
            </p>
            <p className="text-sm text-gray-700">
              Production schema design · Full-stack architecture · REST
              integration across three vendor APIs · Embedding with stakeholders
              to shape a solution
            </p>
          </div>
        </article>
      </section>

      {/* Project 2: Agentic AI System */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <article className="border border-gray-200 rounded-xl p-8">
          <div className="flex items-baseline justify-between mb-4 gap-4">
            <h3 className="text-2xl font-bold">
              Agentic Operating Layer on Claude
            </h3>
            <span className="shrink-0 text-xs uppercase tracking-wider text-green-700 bg-green-50 px-2 py-1 rounded">
              In Production
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            A personal operating system running on Claude (Cowork): 10 scheduled
            agents that compose 12 reusable skills. Four agents run on a daily
            schedule, including a Chief of Staff agent that aggregates several
            Notion databases each weekday morning into priorities, content
            status, and open loops. The rest run on-demand or through an
            orchestrator that routes free-form inputs to the right domain agent.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The engineering is in the skills layer. A modular SKILL.md
            architecture separates orchestration from domain logic, keeping
            reusable patterns distinct from instance-specific configuration.
            Notion and Gmail connect through Cowork&apos;s built-in connectors,
            so agents read and write tasks, pages, and drafts as part of their
            runs. It is the operating layer I actually use to run content, job
            search, and research, not a prototype.
          </p>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Stack
            </p>
            <p className="text-sm text-gray-700">
              Claude (Cowork) · Notion as knowledge base · Cowork Notion + Gmail
              connectors · modular SKILL.md skills layer
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Demonstrates
            </p>
            <p className="text-sm text-gray-700">
              GenAI in daily production · Anthropic platform fluency · agent
              system architecture · separation of reusable patterns from config
            </p>
          </div>
        </article>
      </section>

      {/* Project 3: TikTok caption recovery */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <article className="border border-gray-200 rounded-xl p-8">
          <div className="flex items-baseline justify-between mb-4 gap-4">
            <h3 className="text-2xl font-bold">
              TikTok Caption Recovery (Own Profile)
            </h3>
            <span className="shrink-0 text-xs uppercase tracking-wider text-green-700 bg-green-50 px-2 py-1 rounded">
              Built
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            TikTok&apos;s official data export returned &quot;N/A&quot; for
            video captions across more than 380 of my own posts. The real
            question was whether the captions did not exist, or whether they
            existed and were simply left out of the export. I opened Chrome
            DevTools, watched the Network tab while browsing my own profile, and
            found the captions lived in the{" "}
            <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">
              desc
            </code>{" "}
            field inside the internal{" "}
            <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">
              item_list
            </code>{" "}
            API response. TikTok had the data and was not including it in the
            export.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I built a Python Playwright script that authenticates as me, scrolls
            my profile to trigger the relevant API calls, and extracts caption
            and subtitle data from each response. Added rate limiting to avoid
            IP blocking and resume logic so the script can pick up where it left
            off if interrupted. Output to JSON and CSV for downstream content
            analysis.
          </p>

          <p className="text-sm text-gray-600 leading-relaxed italic">
            Scope note: this runs only against my own authenticated session and
            my own profile. The data recovered is mine.
          </p>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Stack
            </p>
            <p className="text-sm text-gray-700">
              Python · Playwright (async) · Chrome DevTools network inspection ·
              JSON/CSV output
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Demonstrates
            </p>
            <p className="text-sm text-gray-700">
              Diagnostic instinct · reading where data actually lives in a
              third-party system · building the workaround when the official
              tool fails
            </p>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">
          Source:{" "}
          <a
            href="https://github.com/Adaakal/adaugo-fde-portfolio"
            className="text-gray-900 underline"
          >
            github.com/Adaakal/adaugo-fde-portfolio
          </a>
        </p>
        <p className="text-sm text-gray-600">
          Built with Next.js, TypeScript, Tailwind, deployed on Vercel. Claude
          API integration coming next.
        </p>
      </footer>
    </main>
  );
}
