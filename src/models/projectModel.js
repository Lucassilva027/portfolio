const projects = [
  {
    id: "emporio-ai-agent",
    title: "Empório da Música — Agente AI",
    featured: false,
    homeTier: "primary",
    surfaceHighlight:
      "Desafio técnico AI Engineer (Artefact): agente híbrido com tools SQL, RAG e failover de LLM.",
    roleLabel:
      "AI Engineer — agente ReAct/Function Calling, RAG híbrido, ETL SQLite e interfaces CLI/Streamlit",
    summaryLine:
      "Assistente de atendimento \"Tom\" para loja de instrumentos: consulta catálogo/estoque/pedidos em SQLite, responde políticas via RAG e recusa com educação o que está fora do escopo.",
    challenge:
      "Entregar um agente de mensagens confiável para atendimento: números de catálogo sem alucinação, políticas explicadas com trechos recuperados, persona consistente e funcionamento mesmo sem API key de LLM.",
    scope: [
      "Persona Tom com system prompt alinhado a políticas da loja (PIX, parcelas, LGPD, prazos).",
      "Tools SQL determinísticas para preços, estoque, promoções, pedidos e elegibilidade de troca.",
      "RAG híbrido sobre o Manual de Políticas (PDF): embeddings MiniLM + TF-IDF + boosting por seção.",
      "Camada híbrida: Function Calling (Groq/Gemini) com failover e motor local ReAct zero-config.",
      "Interfaces CLI (Rich) e web (Streamlit) com histórico de sessão em SQLite.",
      "Pipeline ETL com auditoria de qualidade dos CSVs de produtos e pedidos."
    ],
    delivery: [
      "Arquitetura EmporioAgent + StoreToolkit + PolicyRAGEngine com as mesmas tools no caminho cloud e local.",
      "Provedores Groq e Gemini com `LLM_PROVIDER=auto` e fallback local sem chave.",
      "Persistência de histórico/contexto do cliente para retomar conversa na CLI e na UI.",
      "Data de referência configurável para avaliar prazos de forma estável nos testes.",
      "Suíte pytest e scripts de diagnóstico (`ping_llm`, geração de exemplos de conversa).",
      "README com arquitetura, decisões híbridas e instruções de setup Windows/Linux."
    ],
    result: [
      "Protótipo completo do desafio Artefact, rodando localmente com ou sem LLM cloud.",
      "Separação clara entre dados tabulares (SQL) e políticas textuais (RAG), evitando inventar preço/estoque.",
      "Failover entre provedores e motor local para demos estáveis em free tier.",
      "Base documentada para evoluir com mais tools, observabilidade ou deploy do chat."
    ],
    stack: [
      "Python",
      "SQLite",
      "Streamlit",
      "Groq",
      "Google Gemini",
      "RAG",
      "sentence-transformers",
      "TF-IDF",
      "Rich CLI",
      "pytest"
    ],
    image:
      "https://opengraph.githubassets.com/1/Lucassilva027/emporio-da-musica-ai-agent",
    imageAlt:
      "Preview do repositório Empório da Música — Agente de Atendimento no GitHub",
    link: "",
    linkLabel: "Abrir aplicação em produção",
    repoLink: "https://github.com/Lucassilva027/emporio-da-musica-ai-agent",
    repoLinkLabel: "Abrir código no GitHub",
    status: "implementation",
    statusLabel: "Implementação full stack documentada",
    statusSub: "Desafio Técnico AI Engineer — Artefact (2026)",
    caseStudy: {
      objective:
        "Provar capacidade de AI Engineer com agente de atendimento grounded: tools SQL, RAG de políticas e operação resiliente sem depender de um único provedor de LLM.",
      process:
        "Leitura do briefing e do manual, modelagem ETL/SQLite, implementação das tools, motor local + Function Calling, UI Streamlit/CLI, testes e exemplos de conversa.",
      decisions: [
        "Híbrido SQL + RAG para não misturar fatos tabulares com texto de política.",
        "Motor local determinístico como fallback e modo demo zero-config.",
        "Failover Groq → Gemini em vez de um único provedor pago.",
        "Persona e regras críticas injetadas no system prompt para tom e conformidade."
      ],
      outcomeDetail:
        "O repositório entrega agente completo com tools, RAG, CLI, Streamlit e testes; o modal deste portfólio resume objetivo, processo e decisões para leitura técnica rápida."
    }
  },
  {
    id: "shooter-naval-2d",
    title: "Pirate Battle",
    featured: false,
    homeTier: "primary",
    surfaceHighlight:
      "Jogo 2D top-down na Vercel com simulação determinística, ranking e cenários de rede mockados.",
    roleLabel:
      "Game Developer — TypeScript, PixiJS, Vite, simulação fixa e UX de ranking/histórico",
    summaryLine:
      "Shooter naval top-down: navegar, atirar canhões frontais e laterais, evitar ilhas/inimigos e sobreviver por pontos — entrega do Jungle Gaming Game Developer Challenge.",
    challenge:
      "Entregar um jogo jogável em navegador com simulação determinística, HUD claro, controles teclado/touch, persistência local de perfil e ranking resiliente a falhas de rede (incluindo offline).",
    scope: [
      "Simulação de passo fixo com seed URL para partidas reproduzíveis e três layouts de ilhas.",
      "Controles teclado + stick/touch em landscape; pausa e opções de duração/spawn.",
      "HUD de vida, score, tempo e reload dos canhões; shake de câmera com respeito a reduced-motion.",
      "Ranking e histórico paginados com submissão idempotente de partidas.",
      "MSW com cenários de rede (latência, timeout, falha, fora de ordem) para testar resiliência.",
      "Chunk lazy do battle screen (PixiJS) com estados de loading e erro."
    ],
    delivery: [
      "App Vite + TypeScript com configuração de gameplay congelada por partida.",
      "Arena PixiJS separada do shell de menus/ranking para performance e code-splitting.",
      "Perfil de capitão, personal best por configuração e fila local de resultados pendentes.",
      "CSP e variáveis `VITE_API_*` documentadas para mock vs. backend real.",
      "Vitest, ESLint e typecheck no fluxo de comandos do desafio.",
      "Deploy público na Vercel com demo jogável."
    ],
    result: [
      "Demo live em https://shooter-naval-2d.vercel.app com partida completa e ranking.",
      "Simulação determinística facilita QA e regressão por seed.",
      "Cenários MSW tornam falhas de rede reproduzíveis sem backend real.",
      "Base pronta para apontar a uma API real sem reescrever o gameplay."
    ],
    stack: [
      "TypeScript",
      "PixiJS",
      "Vite",
      "MSW",
      "Vitest",
      "ESLint",
      "Vercel"
    ],
    image:
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fshooter-naval-2d.vercel.app%2F?w=1400",
    imageAlt: "Captura do Pirate Battle em produção na Vercel",
    link: "https://shooter-naval-2d.vercel.app",
    linkLabel: "Abrir aplicação em produção",
    repoLink: "https://github.com/Lucassilva027/shooter-naval-2d",
    repoLinkLabel: "Abrir código no GitHub",
    status: "online",
    statusLabel: "Produção",
    statusSub: "Jungle Gaming — Game Developer Challenge",
    caseStudy: {
      objective:
        "Entregar um shooter naval 2D completo para o desafio Jungle Gaming: jogabilidade, HUD, ranking e resiliência de rede em um único app web.",
      process:
        "Definição de config de gameplay, implementação da simulação e da arena PixiJS, menus/ranking com MSW, hardening de cenários de rede e publish na Vercel.",
      decisions: [
        "Passo fixo + seed para partidas reproduzíveis e testes estáveis.",
        "PixiJS em chunk lazy separado dos menus para isolar custo de GPU/JS.",
        "MSW com seletor de cenários para validar UX offline/timeout sem backend.",
        "Cap de 8 inimigos e regras de spawn explícitas para balanceamento."
      ],
      outcomeDetail:
        "O demo em produção cobre partida, ranking e histórico; o modal deste portfólio documenta objetivo, processo e decisões técnicas para avaliação rápida."
    }
  },
  {
    id: "philomedia",
    title: "PhiloMedia",
    featured: true,
    homeTier: "featured",
    surfaceHighlight:
      "Já em produção no Render (API + testes) — produto ainda em finalização, bem próximo do fechamento.",
    roleLabel:
      "Full stack — API REST, integrações externas, persistência, frontend e deploy",
    summaryLine:
      "Produto web que conecta obras do TMDB a citações filosóficas persistidas, com interpretação gerada com IA — já utilizável, ainda não completo.",
    challenge:
      "Projetar e implementar um fluxo ponta a ponta de descoberta de mídia: catálogo externo confiável, metadados ricos, citação contextualizada e texto explicativo gerado — com API versionável, dados em banco e ambiente de produção reproduzível.",
    scope: [
      "MVP de descoberta: vitrine, busca e página de detalhe da obra com dados TMDB.",
      "Domínio de citações: curadoria, matching com fallback e armazenamento em MongoDB.",
      "Contrato HTTP para matches, quotes, TMDB e orquestração de IA para leitura.",
      "Camada de documentação interativa dos endpoints (OpenAPI / Swagger UI).",
      "Superfície web em HTML, CSS e JavaScript sem framework de SPA.",
      "Pacote de deploy e variáveis de ambiente alinhados ao provedor Render."
    ],
    delivery: [
      "Rotas Express agrupadas por domínio (`/api/quotes`, `/api/matches`, `/api/tmdb`, `/api/ai/quotes`) com validação e tratamento de erro coerente.",
      "Integração TMDB para busca, detalhe e metadados (sinopse, gêneros, rede/estúdio, criadores, nota).",
      "Modelagem Mongoose, scripts de seed e importação auxiliar para evolução do acervo.",
      "Serviço de leitura interpretativa com Google Gemini acoplado ao contexto da obra selecionada.",
      "Sessões e fundação OAuth Google (Passport) para evolução de área logada sem quebrar o núcleo público.",
      "Suíte de testes automatizados (`npm test`, `npm run test:detect`) integrada ao fluxo de desenvolvimento."
    ],
    result: [
      "Fluxo principal utilizável em produção no Render, com README descrevendo escopo, limites do MVP e roadmap.",
      "Documentação navegável em `/api-docs`, reduzindo custo de onboarding de outro dev ou de integração futura.",
      "Separação clara entre dados de catálogo (TMDB), conteúdo editorial (citações) e geração (IA), facilitando evolução independente de cada eixo.",
      "Base pronta para extensões (filtros de busca, favoritos, auth completa no front) sem re-arquitetar o núcleo."
    ],
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JavaScript",
      "HTML",
      "CSS",
      "TMDB API",
      "Google Gemini",
      "Passport",
      "Swagger",
      "Render"
    ],
    image: "/images/philomedia-hero.png",
    imageAlt:
      "Tela do PhiloMedia com citação filosófica do dia e recomendações de filmes em diálogo",
    link: "https://philomedia.onrender.com/html/index.html",
    linkLabel: "Abrir aplicação em produção",
    repoLink: "https://github.com/Lucassilva027/philomedia",
    repoLinkLabel: "Abrir código no GitHub",
    status: "online",
    statusLabel: "Produção",
    statusSub: "Ainda não completo — bem próximo do fechamento",
    caseStudy: {
      objective:
        "Validar produto de mídia + filosofia com catálogo real, persistência e camada de leitura assistida por modelo de linguagem, com contratos HTTP explícitos e deploy reproduzível.",
      process:
        "Definição do fluxo MVP, modelagem de dados de citações, integração TMDB, encapsulamento da chamada ao Gemini, exposição de rotas REST e publicação documentada no Render com variáveis de ambiente versionadas.",
      decisions: [
        "MongoDB como store de citações e extensão futura para coleções por usuário.",
        "Matching com fallback para cobrir lacunas do acervo sem interromper a jornada.",
        "Gemini para texto interpretativo em vez de apenas templates fixos.",
        "`render.yaml` e configuração explícita de ambiente para reduzir divergência entre local e produção."
      ],
      outcomeDetail:
        "O núcleo já roda em produção (busca/detalhe TMDB, citação persistida, leitura gerada, API documentada e testes), mas o produto ainda não está completo — falta fechar itens de roadmap próximos do lançamento. O modal resume objetivo, processo e decisões para leitura técnica rápida."
    }
  },
  {
    id: "adv",
    title: "Polesso & Oliveira Advogados",
    featured: false,
    homeTier: "primary",
    surfaceHighlight:
      "Site público na Cloudflare Pages com formulário de triagem e CTAs integrados.",
    roleLabel:
      "Frontend + UX — arquitetura de informação, HTML semântico, formulários e performance em edge",
    summaryLine:
      "Site institucional de alta densidade informativa com conversão para triagem (WhatsApp, e-mail, formulário) e narrativa alinhada à ética da advocacia.",
    challenge:
      "Converter dezenas de frentes jurídicas, avisos de responsabilidade e provas de credibilidade em uma superfície única, escaneável em dispositivos móveis, sem perda de rigor nem de conversão para o primeiro contato.",
    scope: [
      "Arquitetura de página única com navegação por âncoras e hierarquia de headings consistente.",
      "Blocos de serviço, demandas típicas, método de atendimento, perfil dos sócios e FAQ.",
      "Superfície de formulário para triagem inicial com campos mínimos e orientação de privacidade.",
      "Integração explícita a canais externos (WhatsApp, e-mail, redes) como continuação da jornada.",
      "Publicação como ativo estático servido por CDN (Cloudflare Pages).",
      "Ajuste de microcopy a restrições regulatórias (informação, não promessa de resultado)."
    ],
    delivery: [
      "Mapeamento de jornada: urgência → prova institucional → método → pessoas → ação, com CTAs coerentes em cada estágio.",
      "Implementação responsiva com tipografia e espaçamento calibrados para leitura longa em telas pequenas.",
      "Formulário com labels explícitos, seleção de tipo de demanda e texto de apoio sobre dados sensíveis.",
      "HTML semântico (landmarks, listas, seções nomeadas) para acessibilidade e SEO on-page.",
      "Padrão de FAQ expansível para responder objeções sem poluir a dobra inicial.",
      "Configuração de deploy estático com invalidação simples de cache e baixa superfície de ataque no edge."
    ],
    result: [
      "Site público estável com narrativa única e múltiplos pontos de conversão alinhados ao negócio jurídico.",
      "Redução de atrito na triagem: listas do que reunir e próximos passos antes do contato humano.",
      "Canais reais integrados na interface; visitante encontra o meio de contato adequado sem caça ao botão.",
      "Performance coerente com modelo estático: first load previsível e custo operacional baixo para o cliente."
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Cloudflare Pages",
      "CDN / edge",
      "UX writing",
      "Acessibilidade",
      "SEO on-page"
    ],
    image: "/images/polesso-oliveira-hero.png",
    imageAlt:
      "Hero do site Polesso & Oliveira Advogados — atendimento jurídico e CTAs de conversão",
    link: "https://polesso-oliveira-advogados.pages.dev/",
    linkLabel: "Abrir site em produção",
    repoLink: "",
    repoLinkLabel: "",
    status: "online",
    statusLabel: "Produção",
    statusSub: "",
    caseStudy: {
      objective:
        "Funcionar como vitrine digital de alto rigor: informar, filtrar intenção e levar o visitante a um primeiro contato estruturado, respeitando limites de comunicação da OAB.",
      process:
        "Levantamento de conteúdo com o cliente, priorização de mensagens, desenho da navegação por âncoras, implementação do layout, revisão de formulário e publicação em edge com validação em dispositivos reais.",
      decisions: [
        "Página única com âncoras para manter contexto narrativo e um único URL compartilhável.",
        "Edge estático em vez de CMS dinâmico para custo e superfície de segurança alinhados ao escopo.",
        "FAQ colapsável para profundidade sem sacrificar escaneabilidade inicial.",
        "Microcopy explícito sobre sigilo, prazos de retorno e ausência de promessa de resultado."
      ],
      outcomeDetail:
        "Entrega em produção com hierarquia visual forte, formulário operacional e integração a canais externos; o modal deste portfólio documenta objetivo, processo e decisões de arquitetura de informação e de publicação para revisão técnica rápida."
    }
  },
  {
    id: "tatame-manager",
    title: "Tatame Manager",
    featured: false,
    homeTier: "primary",
    surfaceHighlight:
      "SaaS em produção para academias de Taekwondo — finanças, turmas, mensalidades e assinaturas.",
    roleLabel:
      "Full stack — React/TypeScript, Node/Express, PostgreSQL, JWT, jobs e integrações (WhatsApp/e-mail)",
    summaryLine:
      "SaaS para academias de Taekwondo: dashboards financeiros, turmas, alunos, mensalidades e assinaturas dos professores — com avisos por WhatsApp e e-mail.",
    challenge:
      "Centralizar operação e cobrança da academia em um produto multi-perfil (professor/aluno), com assinatura condicionando acesso, jobs de aviso de mensalidade e stack tipada pronta para produção.",
    scope: [
      "Painel do professor: dashboard financeiro, turmas, alunos, mensalidades e gestão de assinatura.",
      "Portal do aluno: dados pessoais, mensalidades e jornada de pagamento.",
      "Autenticação JWT para professores e alunos, com verificação de assinatura ativa.",
      "Cadastro de professor com criação ou vínculo de associação.",
      "Geração automática de mensalidades e histórico de pagamentos.",
      "Avisos de cobrança por WhatsApp (W-API) e e-mail (Resend/SMTP) em marcos D-2, D0 e D+2."
    ],
    delivery: [
      "Frontend React + TypeScript (Vite), React Router, React Query e Recharts.",
      "Backend Node.js + Express com TypeScript, PostgreSQL e autenticação JWT.",
      "Schema SQL versionado (`schema.sql` / `seed.sql`) e Docker Compose para bootstrap local.",
      "Jobs de aviso de mensalidade/assinatura com idempotência e allowlist de teste.",
      "E-mails transacionais (verificação, convite de feedback, alertas de sessão WhatsApp).",
      "Deploy público em https://tatamemanager.tech/."
    ],
    result: [
      "Produto utilizável em produção com fluxos de professor e aluno já operacionais.",
      "Domínio financeiro e acadêmico modelado de ponta a ponta (turmas, mensalidades, assinatura).",
      "Canal de cobrança automatizado (WhatsApp + e-mail) além do portal do aluno.",
      "Ainda não completo — bem próximo do fechamento; repositório privado em outra conta."
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Query",
      "Recharts",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Resend",
      "WhatsApp API"
    ],
    image: "/images/tkd-dashboard-mock.svg",
    imageAlt:
      "Interface administrativa do Tatame Manager — dashboard financeiro e gestão de academia",
    link: "https://tatamemanager.tech/",
    linkLabel: "Abrir aplicação em produção",
    repoLink: "",
    repoLinkLabel: "",
    status: "online",
    statusLabel: "Produção",
    statusSub: "Ainda não completo — bem próximo do fechamento",
    caseStudy: {
      objective:
        "Entregar um SaaS completo para academias de Taekwondo: operação (turmas/alunos), cobrança (mensalidades/assinatura) e comunicação automática, com stack tipada e ambiente de produção real.",
      process:
        "Modelagem SQL do domínio, API Express tipada, frontend React com React Query, jobs de aviso, integração W-API/Resend e publicação em tatamemanager.tech.",
      decisions: [
        "React + Vite no front e Express/TypeScript no back para um monólito modular tipado.",
        "PostgreSQL com `schema.sql` como fonte da verdade (sem pasta de migrations para ambiente novo).",
        "Assinatura do professor como gate de acesso ao painel, alinhado ao modelo SaaS.",
        "Avisos D-2/D0/D+2 com idempotência para não spammar alunos e professores."
      ],
      outcomeDetail:
        "O produto já está online com painéis, cobrança e avisos; ainda falta fechar itens finais antes de considerar completo. O código é privado — a ficha técnica deste modal resume o que o README atual descreve."
    }
  },
  {
    id: "nota-fiscal",
    title: "Sistema de Emissão de Notas Fiscais",
    featured: false,
    homeTier: "archive",
    surfaceHighlight:
      "Full stack com microsserviços ASP.NET Core 10 + Angular 20 — estoque e faturamento isolados.",
    roleLabel:
      "Full stack — Angular 20, ASP.NET Core 10, microsserviços, EF Core e integração estoque/faturamento",
    summaryLine:
      "Emissão e gestão de notas fiscais com numeração sequencial, impressão por status e baixa de estoque entre dois microsserviços .NET e um frontend Angular.",
    challenge:
      "Modelar emissão e fechamento de notas com regras distribuídas: estoque e faturamento em serviços separados, SQLite independente, falha simulada no estoque e UI única que mantém o operador informado em cada etapa.",
    scope: [
      "StockService: cadastro de produtos, consulta de saldos, baixa e simulação de falha.",
      "BillingService: criação de notas, numeração sequencial, status Aberta/Fechada e impressão.",
      "Frontend Angular como superfície única para produtos, notas, impressão e teste de resiliência.",
      "Bancos SQLite isolados (`stock.db` e `billing.db`).",
      "Solution Visual Studio + script PowerShell `build-all.ps1` para build local.",
      "Documentação de arquitetura e decisões em `DETALHAMENTO_TECNICO.md`."
    ],
    delivery: [
      "APIs ASP.NET Core 10 com Minimal APIs, EF Core e middleware de exceções com `ProblemDetails`.",
      "Comunicação HTTP Billing → Stock com validação de saldo, produto inexistente e idempotência na baixa.",
      "Angular 20 com Reactive Forms, RxJS (`forkJoin`, `switchMap`, `catchError`) e componentes standalone.",
      "Impressão só em status `Aberta`; sucesso fecha a nota e dispara baixa de estoque.",
      "Modo de falha no estoque com feedback visual e recuperação ao desativar o teste.",
      "SCSS próprio, sem biblioteca de UI externa."
    ],
    result: [
      "Solução local com três processos (Stock, Billing, Angular) e README atualizado de arquitetura e uso.",
      "Bounded contexts claros: estoque e faturamento evoluem com contratos HTTP explícitos.",
      "Erro ponta a ponta — códigos de negócio no backend e mensagens amigáveis no front.",
      "Base pronta para JWT, testes automatizados, Docker e CI/CD (próximos passos documentados no README)."
    ],
    stack: [
      "Angular 20",
      "TypeScript",
      "RxJS",
      "C#",
      "ASP.NET Core 10",
      "EF Core",
      "SQLite",
      "Minimal APIs",
      "SCSS",
      "PowerShell"
    ],
    image:
      "https://opengraph.githubassets.com/1/Lucassilva027/Nota_Fiscal_Projeto",
    imageAlt:
      "Preview do repositório Sistema de Emissão de Notas Fiscais no GitHub",
    link: "",
    linkLabel: "Abrir aplicação em produção",
    repoLink: "https://github.com/Lucassilva027/Nota_Fiscal_Projeto",
    repoLinkLabel: "Abrir código no GitHub",
    status: "implementation",
    statusLabel: "Implementação full stack documentada",
    statusSub: "",
    caseStudy: {
      objective:
        "Demonstrar microsserviços .NET com frontend Angular: emissão fiscal, controle de estoque e resiliência simulada em um fluxo coerente para o operador.",
      process:
        "Bounded contexts (estoque vs. faturamento), APIs + EF Core/SQLite, integração HTTP, UI Angular e documentação do fluxo de impressão/baixa.",
      decisions: [
        "Dois microsserviços em vez de monólito para isolar persistência e contratos.",
        "SQLite por serviço para setup local sem infra compartilhada.",
        "Angular + RxJS para orquestrar chamadas paralelas e encadeadas.",
        "Falha simulada no estoque para validar feedback e idempotência sem dependência externa."
      ],
      outcomeDetail:
        "O repositório entrega produtos, notas multi-item, impressão condicionada a status, baixa idempotente e modo de falha testável — alinhado ao README atual e ao `DETALHAMENTO_TECNICO.md`."
    }
  },
  {
    id: "handcrafted-haven",
    title: "Handcrafted Haven",
    featured: false,
    homeTier: "primary",
    surfaceHighlight:
      "Marketplace em produção na Vercel com catálogo, reviews e painel do vendedor.",
    roleLabel:
      "Full stack colaborativo — Next.js 15, TypeScript, Supabase, auth customizada e UI responsiva (BYU-Idaho)",
    summaryLine:
      "Marketplace para artesãos venderem produtos artesanais: cadastro de vendedores, catálogo com filtros, detalhe do produto, avaliações e formulário de contato com persistência em banco.",
    challenge:
      "Entregar uma plataforma e-commerce credível em equipe: autenticação segura, painel do vendedor, catálogo público navegável, reviews e mensagens de contato — com stack moderna (App Router, TypeScript, PostgreSQL via Supabase) e deploy público.",
    scope: [
      "Autenticação de vendedores com hash de senha (bcrypt) e fluxos de signup/login.",
      "Dashboard do vendedor: CRUD de produtos com upload de imagem.",
      "Catálogo público com filtro por categoria e página de detalhe (preço, estoque, descrição).",
      "Sistema de reviews com nota (1–5) e comentários.",
      "Página de contato com armazenamento de mensagens no banco.",
      "Layout responsivo com Tailwind CSS e publicação na Vercel."
    ],
    delivery: [
      "App Router do Next.js 15 com rotas e componentes em TypeScript.",
      "Schema Supabase: `sellers`, `products`, `categories`, `reviews`, `contacts`.",
      "Auth customizada com bcryptjs integrada às rotas protegidas do vendedor.",
      "Listagens e filtros de produto com queries alinhadas ao modelo relacional.",
      "UI mobile-first com Tailwind e ícones Lucide React.",
      "Demo publicada em ambiente Vercel com variáveis de ambiente documentadas no README."
    ],
    result: [
      "Aplicação acessível em produção na Vercel com fluxo completo de navegação pública e área do vendedor.",
      "Projeto colaborativo de curso (BYU-Idaho) com contribuição full stack documentada no repositório.",
      "Separação clara entre camada de apresentação, acesso a dados Supabase e regras de autenticação.",
      "Base extensível para checkout, pagamentos ou painel administrativo sem reescrever o núcleo."
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "bcryptjs",
      "Lucide React",
      "Vercel"
    ],
    image:
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fhandcrafted-haven-sand.vercel.app%2F?w=1400",
    imageAlt: "Captura do Handcrafted Haven em produção na Vercel",
    link: "https://handcrafted-haven-sand.vercel.app/",
    linkLabel: "Abrir aplicação em produção",
    repoLink: "https://github.com/Lucassilva027/Handcrafted-haven",
    repoLinkLabel: "Abrir código no GitHub",
    status: "online",
    statusLabel: "Produção",
    statusSub: "Projeto colaborativo — BYU-Idaho (WDD 430)",
    caseStudy: {
      objective:
        "Disponibilizar um marketplace funcional para artesãos e compradores, com autenticação, gestão de loja, catálogo, reviews e contato — como entrega de equipe em disciplina de desenvolvimento web.",
      process:
        "Divisão de features entre quatro desenvolvedores, modelagem do schema Supabase, implementação das rotas Next.js, integração de auth e upload, revisão de responsividade e deploy na Vercel com demo pública.",
      decisions: [
        "Next.js App Router para rotas modernas e renderização híbrida alinhada ao currículo.",
        "Supabase como BaaS para acelerar persistência e auth sem operar servidor PostgreSQL próprio.",
        "Tailwind para consistência visual e velocidade de iteração em layout responsivo.",
        "Auth customizada com bcrypt em vez de provedor externo, para controle total do fluxo de vendedor."
      ],
      outcomeDetail:
        "O demo em produção cobre catálogo, detalhe, reviews e área do vendedor; o modal deste portfólio documenta objetivo, processo colaborativo e decisões de stack para avaliação por recrutador ou engenheiro de software."
    }
  }
];

const projectsEn = require("../i18n/projects-en");

function localizeProject(project, locale, ui) {
  const localized = { ...project };
  localized.statusLabel =
    project.status === "online" ? ui.status.online : ui.status.implementation;

  if (project.link) {
    localized.linkLabel = ui.actions.openProduction;
  }
  if (project.repoLink) {
    localized.repoLinkLabel = ui.actions.openRepo;
  }

  if (locale === "en" && projectsEn[project.id]) {
    const en = projectsEn[project.id];
    const { caseStudy: enCaseStudy, ...enRest } = en;
    Object.assign(localized, enRest);
    if (enCaseStudy) {
      localized.caseStudy = { ...project.caseStudy, ...enCaseStudy };
    }
  }

  return localized;
}

function mapProjects(locale, ui) {
  return projects.map((p) => localizeProject(p, locale, ui));
}

function getAllProjects(locale, ui) {
  return mapProjects(locale, ui);
}

function getFeaturedProject(locale, ui) {
  const list = mapProjects(locale, ui);
  return list.find((p) => p.featured) || list[0];
}

function getPrimaryProjects(locale, ui) {
  return mapProjects(locale, ui).filter((p) => p.homeTier === "primary");
}

function getArchiveProjects(locale, ui) {
  return mapProjects(locale, ui).filter((p) => p.homeTier === "archive");
}

module.exports = {
  getAllProjects,
  getFeaturedProject,
  getPrimaryProjects,
  getArchiveProjects
};
