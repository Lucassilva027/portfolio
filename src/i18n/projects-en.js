module.exports = {
  philomedia: {
    summaryLine:
      "Web product connecting TMDB titles to persisted philosophical quotes, with AI-generated interpretation from the work and the quote.",
    surfaceHighlight:
      "Live on Render with documented API and automated tests.",
    imageAlt: "Screenshot of PhiloMedia in production on Render",
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
      "Foundation ready for extensions (search filters, favorites, full front-end auth) without re-architecting the core."
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
        "The repository describes a core already running in production: TMDB search and detail, persisted quotes, generated reading, documented API, and automated tests — summarized here for quick review by a recruiter or tech lead."
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
  tkdmanagerpro: {
    summaryLine:
      "Web app for student enrollment, classes, and attendance, with an admin panel for staff and instructors.",
    surfaceHighlight:
      "Node/Express MVP with academy domain modeled end to end.",
    imageAlt: "Admin UI mock for TKDManagerPro",
    roleLabel:
      "Full stack — Node.js, Express, EJS, server MVC, domain modeling",
    challenge:
      "Centralize enrollment, class assignment, and attendance in one web app with server-side business rules, data consistency, and an admin UI usable during peak hours at the academy.",
    scope: [
      "Admin module to register and edit students, belts, and class assignments.",
      "Attendance register and lookup by class and time period.",
      "EJS surface with shared partials across listings and forms.",
      "Internal HTTP API (Express routes) aligned to domain resources.",
      "Environment-based configuration (port, session secret, URLs).",
      "Foundation for reports from the same data model without destructive migrations."
    ],
    delivery: [
      "Express layer with RESTful routes per resource and uniform error middleware.",
      "Server-side input validation as source of truth with feedback rendered in views.",
      "MVC split: thin controllers, domain services, and swappable data access.",
      "EJS templates with partials for dense lists, filters, and batch actions.",
      "Entity modeling (student, class, attendance) with indexes and relations suited to weekly use.",
      "Responsive presentation for desktop and smartphone at the front desk and on the mat."
    ],
    result: [
      "Codebase with clear domain boundaries, ready to grow with reports and roles without rewriting the core.",
      "Admin UI oriented to repetitive tasks: few clicks per check-in and efficient tabular reading.",
      "Aligned HTTP contract and views, reducing mismatch between user input and persisted data.",
      "Admin UI mock in this portfolio (high-fidelity SVG) for product review without a public environment."
    ],
    caseStudy: {
      objective:
        "Give the academy one system for enrollment, class organization, and attendance, with centralized server rules and a consistent admin interface.",
      process:
        "Domain modeling from actors (front desk, instructor), weekly use-case definition, route and view implementation, validation review, and a Node-ready deployment package.",
      decisions: [
        "Express as the single HTTP framework with server rendering to reduce operational complexity.",
        "EJS for admin pages with low coupling to static assets.",
        "Server validation and business invariants to prevent invalid states even on direct requests.",
        "Explicit MVC separation to ease service tests and future persistence swaps."
      ],
      outcomeDetail:
        "A complete server-rendered MVC app with the academy domain modeled end to end; objective, process, and architectural decisions summarized here for recruiter or engineer review."
    }
  },
  "nota-fiscal": {
    title: "Invoice Issuance System",
    summaryLine:
      "Invoice issuance with sequential numbering, print workflow, and stock updates across two .NET microservices.",
    surfaceHighlight:
      ".NET microservices and Angular UI with full fiscal flow runnable locally.",
    imageAlt: "GitHub preview of the invoice system repository",
    roleLabel:
      "Full stack — Angular, ASP.NET Core, microservices, EF Core",
    challenge:
      "Model invoice issuance and closing with distributed business rules: separate inventory and billing services, independent persistence, simulated failure feedback, and a single UI that keeps the operator informed at each step.",
    scope: [
      "Inventory microservice: product registration, balance queries, stock deduction, and outage simulation.",
      "Billing microservice: invoice creation, sequential numbering, Open/Closed status, and printing.",
      "Angular frontend as the single surface for products, invoices, printing, and resilience testing.",
      "Isolated SQLite databases per service (`stock.db` and `billing.db`).",
      "Unified PowerShell build script and Visual Studio solution for local development.",
      "Technical documentation of architecture, decisions, and error flows."
    ],
    delivery: [
      "ASP.NET Core 10 APIs with Minimal APIs, EF Core, and global exception middleware returning `ProblemDetails`.",
      "HTTP communication between BillingService and StockService with balance checks, missing product handling, and idempotent stock deduction.",
      "Angular 20 UI with Reactive Forms, RxJS (`forkJoin`, `switchMap`, `catchError`), and standalone components.",
      "Print flow: invoice prints only in `Open` status; success moves to `Closed` and triggers stock deduction.",
      "Simulated inventory failure with visual feedback and recovery after disabling test mode.",
      "Custom SCSS without an external UI library, aligned with the academic scope."
    ],
    result: [
      "Locally runnable solution with three processes (inventory, billing, Angular) and README describing architecture and usage.",
      "Clear domain separation so inventory and billing can evolve independently.",
      "End-to-end error handling: business codes on the backend and friendly messages on the frontend.",
      "Documented in `DETALHAMENTO_TECNICO.md` for decision review by a recruiter or tech lead."
    ],
    caseStudy: {
      objective:
        "Demonstrate .NET microservices with an Angular frontend: fiscal issuance, inventory control, and simulated resilience in one coherent operator flow.",
      process:
        "Bounded contexts defined (inventory vs. billing), APIs implemented, EF Core + SQLite modeling, HTTP integration between services, Angular UI built, and print/deduction flow documented.",
      decisions: [
        "Two microservices instead of a monolith to isolate persistence and evolve HTTP contracts explicitly.",
        "SQLite per service for simple local setup without shared infrastructure.",
        "Angular with RxJS to orchestrate parallel and chained dashboard calls.",
        "Inventory failure simulation to validate feedback and recovery without external dependencies."
      ],
      outcomeDetail:
        "The repository delivers product registration, multi-line invoices, status-gated printing, idempotent stock deduction, and a testable failure mode — summarized here for quick technical review."
    }
  }
};
