const projects = [
  {
    id: "philomedia",
    title: "PhiloMedia",
    featured: true,
    homeTier: "featured",
    surfaceHighlight:
      "Fluxo em produção no Render com API documentada e testes automatizados.",
    roleLabel:
      "Full stack — API REST, integrações externas, persistência, frontend e deploy",
    summaryLine:
      "Produto web que conecta obras do TMDB a citações filosóficas persistidas, com interpretação complementar gerada com IA a partir da obra e da citação.",
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
    image:
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fphilomedia.onrender.com%2Fhtml%2Findex.html?w=1400",
    imageAlt: "Captura do PhiloMedia em produção no Render",
    link: "https://philomedia.onrender.com/html/index.html",
    linkLabel: "Abrir aplicação em produção",
    repoLink: "https://github.com/Lucassilva027/philomedia",
    repoLinkLabel: "Abrir código no GitHub",
    status: "online",
    statusLabel: "Produção",
    statusSub: "",
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
        "O repositório descreve um núcleo já operacional em produção: busca e detalhe TMDB, citação persistida, leitura gerada, API documentada e testes automatizados; o modal deste portfólio consolida objetivo, processo e decisões para leitura técnica rápida por recrutador ou tech lead."
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
    id: "tkdmanagerpro",
    title: "TKDManagerPro",
    featured: false,
    homeTier: "archive",
    surfaceHighlight:
      "MVP administrativo em Node/Express com domínio de academia modelado ponta a ponta.",
    roleLabel:
      "Full stack — Node.js, Express, EJS, MVC no servidor, modelagem de domínio e UI administrativa",
    summaryLine:
      "Aplicação web para cadastro de alunos, turmas e registro de presença, com painel consolidado para a equipe administrativa e professores.",
    challenge:
      "Centralizar cadastro, vínculo a turmas e registro de presença em uma única aplicação web, com regras de negócio no servidor, consistência de dados e interface administrativa utilizável em horário de pico da academia.",
    scope: [
      "Módulo administrativo para cadastro e edição de alunos, faixas e vínculo a turmas.",
      "Fluxo de registro e consulta de presença com visão por turma e por período.",
      "Superfície EJS com partials compartilhados entre listagens e formulários.",
      "API HTTP interna (rotas Express) alinhada a recursos de domínio.",
      "Configuração externalizada por ambiente (porta, segredo de sessão, URLs).",
      "Preparação para relatórios derivados do mesmo modelo de dados sem migração destrutiva."
    ],
    delivery: [
      "Camada Express com rotas RESTful por recurso e middleware de tratamento de erro uniforme.",
      "Validação de entrada no servidor como fonte da verdade, com feedback renderizado nas views.",
      "Decomposição MVC: controladores finos, serviços de domínio e camada de acesso a dados isolável.",
      "Templates EJS com componentização via partials para listas densas, filtros e ações em lote.",
      "Modelagem de entidades (aluno, turma, presença) com índices e relações coerentes com o uso semanal.",
      "Camada de apresentação responsiva para uso em desktop e smartphone no balcão e no tatame."
    ],
    result: [
      "Código-base com limites claros de domínio, apto a evoluir com relatórios e perfis sem reescrita do núcleo.",
      "Interface administrativa orientada a tarefas repetitivas: poucos cliques por check-in e leitura tabular eficiente.",
      "Contrato HTTP e views alinhados, reduzindo divergência entre o que o usuário envia e o que o servidor persiste.",
      "Representação visual da UI administrativa neste portfólio (SVG de alta fidelidade ao layout entregue) para revisão de produto sem depender de ambiente público."
    ],
    stack: [
      "Node.js",
      "Express",
      "EJS",
      "JavaScript",
      "CSS",
      "MVC",
      "REST",
      "Modelagem de dados"
    ],
    image: "/images/tkd-dashboard-mock.svg",
    imageAlt:
      "Representação gráfica da interface administrativa do TKDManagerPro alinhada ao layout entregue",
    link: "",
    linkLabel: "Abrir aplicação em produção",
    repoLink: "",
    repoLinkLabel: "Abrir código no GitHub",
    status: "implementation",
    statusLabel: "Implementação full stack documentada",
    statusSub: "",
    caseStudy: {
      objective:
        "Fornecer à academia um sistema único para cadastro, organização de turmas e registro de presença, com regras centralizadas no servidor e interface administrativa consistente.",
      process:
        "Modelagem do domínio a partir dos atores (secretaria, professor), definição dos casos de uso semanais, implementação das rotas e views, revisão de validação e encerramento com pacote pronto para hospedagem em ambiente Node.",
      decisions: [
        "Express como framework HTTP único com renderização no servidor para reduzir complexidade operacional.",
        "EJS para composição de páginas administrativas com baixo acoplamento a assets estáticos.",
        "Validação e invariantes de negócio no servidor para evitar estados inválidos mesmo com requisições diretas.",
        "Separação MVC explícita para facilitar testes de serviço e substituição futura da camada de persistência."
      ],
      outcomeDetail:
        "O case descreve uma aplicação web completa no padrão MVC com domínio de academia modelado de ponta a ponta; a ficha técnica deste modal consolida objetivo, processo e decisões arquiteturais para avaliação por recrutador ou engenheiro de software."
    }
  },
  {
    id: "nota-fiscal",
    title: "Sistema de Emissão de Notas Fiscais",
    featured: false,
    homeTier: "archive",
    surfaceHighlight:
      "Microsserviços .NET e frontend Angular com fluxo fiscal completo em ambiente local.",
    roleLabel:
      "Full stack — Angular, ASP.NET Core, microsserviços, EF Core e integração entre domínios de estoque e faturamento",
    summaryLine:
      "Aplicação para cadastro de produtos, emissão de notas fiscais com numeração sequencial, impressão controlada por status e baixa de estoque orquestrada entre dois microsserviços .NET.",
    challenge:
      "Modelar emissão e fechamento de notas fiscais com regras de negócio distribuídas: estoque e faturamento em serviços separados, persistência independente, feedback de falha simulada e interface única que mantém o operador informado em cada etapa.",
    scope: [
      "Microsserviço de estoque: cadastro de produtos, consulta de saldos, baixa e simulação de indisponibilidade.",
      "Microsserviço de faturamento: criação de notas, numeração sequencial, status Aberta/Fechada e impressão.",
      "Frontend Angular como superfície única para produtos, notas, impressão e testes de resiliência.",
      "Bancos SQLite isolados por serviço (`stock.db` e `billing.db`).",
      "Script PowerShell de build unificado e solution Visual Studio para desenvolvimento local.",
      "Documentação técnica de arquitetura, decisões e fluxos de erro."
    ],
    delivery: [
      "APIs ASP.NET Core 10 com Minimal APIs, EF Core e middleware global de exceções retornando `ProblemDetails`.",
      "Comunicação HTTP entre BillingService e StockService com validações de saldo, produto inexistente e idempotência na baixa.",
      "Interface Angular 20 com Reactive Forms, RxJS (`forkJoin`, `switchMap`, `catchError`) e componentes standalone.",
      "Fluxo de impressão: nota só imprime em status `Aberta`; sucesso altera para `Fechada` e dispara baixa de estoque.",
      "Simulação de falha no serviço de estoque com feedback visual e recuperação após desativar o modo de teste.",
      "SCSS customizado sem biblioteca de UI externa, alinhado ao escopo acadêmico do projeto."
    ],
    result: [
      "Solução executável localmente com três processos (estoque, faturamento, Angular) e README descrevendo arquitetura e uso.",
      "Separação clara de domínios facilita evolução independente de estoque e faturamento.",
      "Tratamento de erro ponta a ponta: backend com códigos de negócio e frontend com mensagens amigáveis.",
      "Base documentada em `DETALHAMENTO_TECNICO.md` para revisão de decisões por recrutador ou tech lead."
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
        "Demonstrar domínio de microsserviços em .NET com frontend Angular: emissão fiscal, controle de estoque e resiliência simulada em um fluxo coerente para o usuário final.",
      process:
        "Definição dos bounded contexts (estoque vs. faturamento), implementação das APIs, modelagem EF Core com SQLite, integração HTTP entre serviços, construção da UI Angular e documentação do fluxo de impressão e baixa.",
      decisions: [
        "Dois microsserviços em vez de monólito para isolar persistência e evoluir contratos HTTP explicitamente.",
        "SQLite por serviço para setup local simples sem infraestrutura compartilhada.",
        "Angular com RxJS para orquestrar chamadas paralelas e encadeadas ao dashboard.",
        "Simulação de falha no estoque para validar feedback e recuperação sem ambiente externo."
      ],
      outcomeDetail:
        "O repositório entrega cadastro de produtos, notas com múltiplos itens, impressão condicionada a status, baixa idempotente de estoque e modo de falha testável; o modal deste portfólio resume objetivo, processo e decisões para leitura técnica rápida."
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
