module.exports = {
  "emporio-ai-agent": {
    title: "Empório da Música — AI Agent",
    summaryLine:
      "Customer-support assistant \"Tom\" for an instrument store: SQLite catalog/stock/orders, policy answers via hybrid RAG, and polite refusal outside store scope.",
    surfaceHighlight:
      "Artefact AI Engineer challenge: hybrid agent with SQL tools, RAG, and LLM failover.",
    statusSub: "AI Engineer Technical Challenge — Artefact (2026)",
    imageAlt:
      "GitHub preview of the Empório da Música customer-support agent repository",
    roleLabel:
      "AI Engineer — ReAct/Function Calling agent, hybrid RAG, SQLite ETL, CLI/Streamlit UIs",
    challenge:
      "Ship a reliable messaging agent: factual catalog numbers without hallucination, policies explained from retrieved excerpts, consistent persona, and a working path even without an LLM API key.",
    scope: [
      "Tom persona with a system prompt aligned to store policies (PIX, installments, LGPD, deadlines).",
      "Deterministic SQL tools for prices, stock, promotions, orders, and exchange eligibility.",
      "Hybrid RAG over the Policies Manual (PDF): MiniLM embeddings + TF-IDF + section boosting.",
      "Hybrid layer: Function Calling (Groq/Gemini) with failover plus a zero-config local ReAct engine.",
      "Rich CLI and Streamlit UIs with session history in SQLite.",
      "ETL pipeline with data-quality audit for product and order CSVs."
    ],
    delivery: [
      "EmporioAgent + StoreToolkit + PolicyRAGEngine architecture sharing the same tools on cloud and local paths.",
      "Groq and Gemini providers with `LLM_PROVIDER=auto` and keyless local fallback.",
      "Customer history/context persistence so conversations resume in CLI and UI.",
      "Configurable reference date for stable deadline evaluation in tests.",
      "pytest suite and diagnostic scripts (`ping_llm`, conversation example generation).",
      "README covering architecture, hybrid decisions, and Windows/Linux setup."
    ],
    result: [
      "Complete Artefact challenge prototype that runs locally with or without a cloud LLM.",
      "Clear split between tabular facts (SQL) and policy text (RAG), avoiding invented price/stock.",
      "Provider failover plus local engine for stable free-tier demos.",
      "Documented base ready for more tools, observability, or chat deploy."
    ],
    caseStudy: {
      objective:
        "Demonstrate AI Engineer skill with a grounded support agent: SQL tools, policy RAG, and resilient operation without depending on a single LLM vendor.",
      process:
        "Brief and manual review, SQLite ETL modeling, tools implementation, local engine + Function Calling, Streamlit/CLI UI, tests, and conversation examples.",
      decisions: [
        "Hybrid SQL + RAG so tabular facts never mix with policy prose.",
        "Deterministic local engine as fallback and zero-config demo mode.",
        "Groq → Gemini failover instead of a single paid provider.",
        "Persona and critical rules injected in the system prompt for tone and compliance."
      ],
      outcomeDetail:
        "The repository delivers a full agent with tools, RAG, CLI, Streamlit, and tests — summarized here for quick technical review."
    }
  },
  "shooter-naval-2d": {
    title: "Pirate Battle",
    summaryLine:
      "Top-down naval shooter: steer, fire front and broadside cannons, dodge islands/enemies, and survive for points — Jungle Gaming Game Developer Challenge submission.",
    surfaceHighlight:
      "2D top-down game on Vercel with deterministic simulation, ranking, and mocked network scenarios.",
    statusSub: "Jungle Gaming — Game Developer Challenge",
    imageAlt: "Screenshot of Pirate Battle live on Vercel",
    roleLabel:
      "Game Developer — TypeScript, PixiJS, Vite, fixed-step simulation, ranking/history UX",
    challenge:
      "Ship a browser-playable game with deterministic simulation, clear HUD, keyboard/touch controls, local captain profile, and ranking resilient to network failures (including offline).",
    scope: [
      "Fixed-step simulation with URL seed for reproducible matches and three island layouts.",
      "Keyboard + landscape stick/touch controls; pause and duration/spawn options.",
      "HUD for health, score, time, and cannon reload; camera shake respecting reduced-motion.",
      "Paginated ranking and history with idempotent match submission.",
      "MSW network scenarios (latency, timeout, failure, out-of-order) to stress resilience.",
      "Lazy-loaded PixiJS battle chunk with loading and error states."
    ],
    delivery: [
      "Vite + TypeScript app with per-match frozen gameplay configuration.",
      "PixiJS arena split from menu/ranking shell for performance and code-splitting.",
      "Captain profile, personal bests per configuration, and local queue for pending results.",
      "CSP and `VITE_API_*` variables documented for mock vs. real backend.",
      "Vitest, ESLint, and typecheck in the challenge command flow.",
      "Public Vercel deploy with a playable demo."
    ],
    result: [
      "Live demo at https://shooter-naval-2d.vercel.app with full match and ranking flow.",
      "Deterministic simulation makes QA and seed-based regression straightforward.",
      "MSW scenarios make network failures reproducible without a real backend.",
      "Ready to point at a real API without rewriting gameplay."
    ],
    caseStudy: {
      objective:
        "Deliver a complete 2D naval shooter for the Jungle Gaming challenge: gameplay, HUD, ranking, and network resilience in one web app.",
      process:
        "Gameplay config definition, simulation and PixiJS arena implementation, menu/ranking with MSW, network-scenario hardening, and Vercel publish.",
      decisions: [
        "Fixed step + seed for reproducible matches and stable tests.",
        "Lazy PixiJS chunk separate from menus to isolate GPU/JS cost.",
        "MSW scenario selector to validate offline/timeout UX without a backend.",
        "Hard 8-enemy cap and explicit spawn rules for balance."
      ],
      outcomeDetail:
        "The live demo covers match, ranking, and history; objective, process, and technical decisions are summarized here for quick review."
    }
  },
  philomedia: {
    summaryLine:
      "Web product connecting TMDB titles to persisted philosophical quotes, with AI-generated interpretation — live and usable, not finished yet.",
    surfaceHighlight:
      "Already live on Render (API + tests) — product still finishing, very close to done.",
    statusSub: "Not complete yet — very close to shipping",
    imageAlt:
      "PhiloMedia screen with quote of the day and film recommendations in dialogue",
    roleLabel:
      "Full stack — REST API, external integrations, persistence, frontend, and deploy",
    challenge:
      "Design and ship an end-to-end media discovery flow: reliable external catalog, rich metadata, contextual quotes, and generated explanatory text — with a versionable API, database persistence, and reproducible production environment.",
    scope: [
      "Discovery MVP: browse, search, and title detail pages powered by TMDB.",
      "Quotes domain: curation, matching with fallback, and MongoDB storage.",
      "HTTP contract for matches, quotes, TMDB, and AI-assisted reading.",
      "Interactive API documentation (OpenAPI / Swagger UI).",
      "Web surface in HTML, CSS, and JavaScript without a SPA framework.",
      "Deploy package and environment variables aligned with Render."
    ],
    delivery: [
      "Express routes grouped by domain (`/api/quotes`, `/api/matches`, `/api/tmdb`, `/api/ai/quotes`) with consistent validation and error handling.",
      "TMDB integration for search, detail, and metadata (synopsis, genres, network/studio, creators, rating).",
      "Mongoose modeling, seed scripts, and import helpers to grow the quote collection.",
      "Interpretive reading service with Google Gemini tied to the selected title context.",
      "Sessions and Google OAuth foundation (Passport) for a future logged-in area without breaking the public core.",
      "Automated test suite (`npm test`, `npm run test:detect`) integrated into the dev workflow."
    ],
    result: [
      "Core flow usable in production on Render, with README covering MVP scope, limits, and roadmap.",
      "Browsable documentation at `/api-docs`, lowering onboarding cost for another developer or future integration.",
      "Clear split between catalog data (TMDB), editorial content (quotes), and generation (AI), so each axis can evolve independently.",
      "Still unfinished — remaining roadmap items are close; foundation ready for filters, favorites, and full front-end auth."
    ],
    caseStudy: {
      objective:
        "Validate a media + philosophy product with a real catalog, persistence, and AI-assisted reading, with explicit HTTP contracts and reproducible deploy.",
      process:
        "MVP flow definition, quote data modeling, TMDB integration, Gemini call encapsulation, REST route exposure, and documented Render publish with versioned environment variables.",
      decisions: [
        "MongoDB as the quote store and future extension point for per-user collections.",
        "Matching with fallback to cover collection gaps without breaking the user journey.",
        "Gemini for interpretive text instead of fixed templates only.",
        "`render.yaml` and explicit environment config to reduce local vs. production drift."
      ],
      outcomeDetail:
        "The core already runs in production (TMDB search/detail, persisted quotes, generated reading, documented API, tests), but the product is not complete yet — a few near-term roadmap items remain before calling it finished."
    }
  },
  adv: {
    title: "Polesso & Oliveira Attorneys",
    summaryLine:
      "High-density law firm site with intake form and conversion to WhatsApp, email, and structured first contact.",
    surfaceHighlight:
      "Public site on Cloudflare Pages with intake form and integrated contact CTAs.",
    imageAlt:
      "Polesso & Oliveira Attorneys website hero — legal services and conversion CTAs",
    roleLabel:
      "Frontend + UX — information architecture, semantic HTML, forms, and edge performance",
    challenge:
      "Turn dozens of practice areas, disclaimers, and credibility signals into a single surface that scans well on mobile without losing rigor or first-contact conversion.",
    scope: [
      "Single-page architecture with anchor navigation and consistent heading hierarchy.",
      "Service blocks, typical matters, intake method, partner profiles, and FAQ.",
      "Intake form with minimal fields and privacy guidance.",
      "Explicit links to external channels (WhatsApp, email, social) as the next step in the journey.",
      "Static asset delivery via CDN (Cloudflare Pages).",
      "Microcopy aligned with regulatory constraints (information, not outcome promises)."
    ],
    delivery: [
      "Journey mapping: urgency → institutional proof → method → people → action, with coherent CTAs at each stage.",
      "Responsive layout with typography and spacing tuned for long reads on small screens.",
      "Form with explicit labels, matter type selection, and copy on sensitive data.",
      "Semantic HTML (landmarks, lists, named sections) for accessibility and on-page SEO.",
      "Expandable FAQ pattern to handle objections without cluttering the first screen.",
      "Static deploy with simple cache invalidation and a small attack surface at the edge."
    ],
    result: [
      "Stable public site with a single narrative and multiple conversion points aligned with the legal practice.",
      "Less friction in intake: what to gather and next steps before human contact.",
      "Real channels wired in the UI so visitors find the right contact path quickly.",
      "Performance consistent with a static model: predictable first load and low operational cost for the client."
    ],
    caseStudy: {
      objective:
        "Serve as a rigorous digital storefront: inform, qualify intent, and drive structured first contact while respecting bar communication rules.",
      process:
        "Content discovery with the client, message prioritization, anchor navigation design, layout implementation, form review, and edge publish validated on real devices.",
      decisions: [
        "Single page with anchors to keep narrative context and one shareable URL.",
        "Static edge delivery instead of a dynamic CMS for cost and security aligned with scope.",
        "Collapsible FAQ for depth without hurting initial scanability.",
        "Explicit microcopy on confidentiality, response times, and no promise of outcome."
      ],
      outcomeDetail:
        "Live delivery with strong visual hierarchy, working form, and external channel integration — objective, process, and IA/publishing decisions summarized here for quick technical review."
    }
  },
  "handcrafted-haven": {
    summaryLine:
      "Marketplace for artisans: seller accounts, catalog with filters, product detail, reviews, and contact form with database storage.",
    surfaceHighlight:
      "Live on Vercel with catalog, reviews, and seller dashboard.",
    statusSub: "Collaborative course project — BYU-Idaho (WDD 430)",
    imageAlt: "Screenshot of Handcrafted Haven on Vercel",
    roleLabel:
      "Collaborative full stack — Next.js 15, TypeScript, Supabase, custom auth",
    challenge:
      "Deliver a credible e-commerce platform as a team: secure auth, seller dashboard, browsable public catalog, reviews, and contact messages — with a modern stack (App Router, TypeScript, PostgreSQL via Supabase) and public deploy.",
    scope: [
      "Seller authentication with password hashing (bcrypt) and signup/login flows.",
      "Seller dashboard: product CRUD with image upload.",
      "Public catalog with category filters and detail page (price, stock, description).",
      "Review system with rating (1–5) and comments.",
      "Contact page with messages stored in the database.",
      "Responsive layout with Tailwind CSS and Vercel deployment."
    ],
    delivery: [
      "Next.js 15 App Router with TypeScript routes and components.",
      "Supabase schema: `sellers`, `products`, `categories`, `reviews`, `contacts`.",
      "Custom auth with bcryptjs on protected seller routes.",
      "Product listings and filters with queries aligned to the relational model.",
      "Mobile-first UI with Tailwind and Lucide React icons.",
      "Public demo on Vercel with environment variables documented in the README."
    ],
    result: [
      "Application live on Vercel with full public navigation and seller area.",
      "Collaborative course project (BYU-Idaho) with documented full-stack contribution in the repository.",
      "Clear separation between presentation, Supabase data access, and authentication rules.",
      "Extensible base for checkout, payments, or admin panel without rewriting the core."
    ],
    caseStudy: {
      objective:
        "Provide a working marketplace for artisans and buyers — auth, store management, catalog, reviews, and contact — as a team deliverable in a web development course.",
      process:
        "Feature split across four developers, Supabase schema modeling, Next.js route implementation, auth and upload integration, responsiveness review, and public Vercel deploy.",
      decisions: [
        "Next.js App Router for modern routes and hybrid rendering aligned with the curriculum.",
        "Supabase as BaaS to speed up persistence without operating a dedicated PostgreSQL server.",
        "Tailwind for visual consistency and fast responsive iteration.",
        "Custom bcrypt auth instead of an external provider for full control of the seller flow."
      ],
      outcomeDetail:
        "The live demo covers catalog, detail, reviews, and seller area; objective, collaborative process, and stack decisions are summarized here for recruiter or engineer review."
    }
  },
  "tatame-manager": {
    title: "Tatame Manager",
    summaryLine:
      "SaaS for Taekwondo academies: financial dashboards, classes, students, tuition, and instructor subscriptions — with WhatsApp and email notices.",
    surfaceHighlight:
      "Live SaaS for Taekwondo academies — finance, classes, tuition, and subscriptions.",
    statusSub: "Not complete yet — very close to shipping",
    imageAlt:
      "Tatame Manager admin UI — financial dashboard and academy management",
    roleLabel:
      "Full stack — React/TypeScript, Node/Express, PostgreSQL, JWT, jobs, WhatsApp/email",
    challenge:
      "Centralize academy operations and billing in a multi-role product (instructor/student), with subscription gating access, tuition reminder jobs, and a typed stack ready for production.",
    scope: [
      "Instructor panel: financial dashboard, classes, students, tuition, and subscription management.",
      "Student portal: personal data, tuition, and payment journey.",
      "JWT auth for instructors and students, with active-subscription checks.",
      "Instructor signup with association create-or-link.",
      "Automatic tuition generation and payment history.",
      "Billing notices via WhatsApp (W-API) and email (Resend/SMTP) at D-2, D0, and D+2."
    ],
    delivery: [
      "React + TypeScript (Vite), React Router, React Query, and Recharts.",
      "Node.js + Express with TypeScript, PostgreSQL, and JWT auth.",
      "Versioned SQL schema (`schema.sql` / `seed.sql`) and Docker Compose for local bootstrap.",
      "Tuition/subscription notice jobs with idempotency and optional test allowlists.",
      "Transactional email (verification, feedback invites, WhatsApp session alerts).",
      "Public deploy at https://tatamemanager.tech/."
    ],
    result: [
      "Usable production product with instructor and student flows already running.",
      "Financial and academy domain modeled end to end (classes, tuition, subscription).",
      "Automated billing channel (WhatsApp + email) plus the student portal.",
      "Not finished yet — very close; private repository on another account."
    ],
    caseStudy: {
      objective:
        "Ship a full SaaS for Taekwondo academies: operations (classes/students), billing (tuition/subscription), and automated communication, with a typed stack and a real production environment.",
      process:
        "SQL domain modeling, typed Express API, React + React Query UI, notice jobs, W-API/Resend integration, and publish on tatamemanager.tech.",
      decisions: [
        "React + Vite on the front and Express/TypeScript on the back for a typed modular app.",
        "PostgreSQL with `schema.sql` as source of truth (no migrations folder for a fresh environment).",
        "Instructor subscription as the access gate to the panel, aligned with the SaaS model.",
        "D-2/D0/D+2 notices with idempotency to avoid spamming students and instructors."
      ],
      outcomeDetail:
        "The product is already online with panels, billing, and notices; a few final items remain before calling it complete. The repo is private — this case study mirrors the current README."
    }
  },
  "nota-fiscal": {
    title: "Invoice Issuance System",
    summaryLine:
      "Invoice issuance and management with sequential numbering, status-gated printing, and stock deduction across two .NET microservices and an Angular UI.",
    surfaceHighlight:
      "Full stack ASP.NET Core 10 microservices + Angular 20 — isolated inventory and billing.",
    imageAlt: "GitHub preview of the invoice system repository",
    roleLabel:
      "Full stack — Angular 20, ASP.NET Core 10, microservices, EF Core",
    challenge:
      "Model invoice issuance and closing with distributed rules: separate inventory and billing services, independent SQLite stores, simulated inventory failure, and a single UI that keeps the operator informed at each step.",
    scope: [
      "StockService: product registration, balance queries, stock deduction, and failure simulation.",
      "BillingService: invoice creation, sequential numbering, Open/Closed status, and printing.",
      "Angular frontend as the single surface for products, invoices, printing, and resilience testing.",
      "Isolated SQLite databases (`stock.db` and `billing.db`).",
      "Visual Studio solution + PowerShell `build-all.ps1` for local builds.",
      "Architecture and decisions documented in `DETALHAMENTO_TECNICO.md`."
    ],
    delivery: [
      "ASP.NET Core 10 APIs with Minimal APIs, EF Core, and exception middleware returning `ProblemDetails`.",
      "HTTP Billing → Stock with balance checks, missing-product handling, and idempotent deduction.",
      "Angular 20 with Reactive Forms, RxJS (`forkJoin`, `switchMap`, `catchError`), and standalone components.",
      "Print only in `Open` status; success closes the invoice and triggers stock deduction.",
      "Inventory failure mode with visual feedback and recovery after disabling the test.",
      "Custom SCSS without an external UI library."
    ],
    result: [
      "Local solution with three processes (Stock, Billing, Angular) and an up-to-date architecture README.",
      "Clear bounded contexts: inventory and billing evolve via explicit HTTP contracts.",
      "End-to-end errors — business codes on the backend and friendly messages on the front.",
      "Ready base for JWT, automated tests, Docker, and CI/CD (next steps listed in the README)."
    ],
    caseStudy: {
      objective:
        "Demonstrate .NET microservices with an Angular frontend: fiscal issuance, inventory control, and simulated resilience in one coherent operator flow.",
      process:
        "Bounded contexts (inventory vs. billing), APIs + EF Core/SQLite, HTTP integration, Angular UI, and print/deduction flow documentation.",
      decisions: [
        "Two microservices instead of a monolith to isolate persistence and contracts.",
        "SQLite per service for simple local setup without shared infrastructure.",
        "Angular + RxJS to orchestrate parallel and chained calls.",
        "Simulated inventory failure to validate feedback and idempotency without external dependencies."
      ],
      outcomeDetail:
        "The repository delivers products, multi-line invoices, status-gated printing, idempotent stock deduction, and a testable failure mode — aligned with the current README and `DETALHAMENTO_TECNICO.md`."
    }
  }
};
