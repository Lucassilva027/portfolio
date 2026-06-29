function getProfile() {
  return {
    stackMain: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "HTML",
      "CSS",
      "C#",
      ".NET",
      "Docker",
      "Firebase"
    ],
    aboutLead:
      "Estudante de desenvolvimento de software na BYU-Idaho, baseado em Gravataí (RS). Construo aplicações full stack com React, TypeScript e Node.js e contribuo em projetos open source.",
    aboutBullets: [
      "Foco em produtos web com boa UX, código legível e deploy em ambiente real.",
      "Busco estágio remoto em desenvolvimento de software (2026)."
    ],
    proof: {
      headline: "Prova profissional",
      subline:
        "Evidências práticas do meu trabalho: código público, aplicações online, documentação técnica navegável e currículos em PDF (PT e EN).",
      items: [
        {
          label: "Perfil no GitHub",
          detail:
            "Repositórios públicos com histórico de commits, incluindo PhiloMedia, Handcrafted Haven, Sistema de Notas Fiscais e outros projetos acadêmicos e pessoais.",
          href: "https://github.com/Lucassilva027"
        },
        {
          label: "Repositório PhiloMedia",
          detail:
            "Código-fonte, README com escopo do MVP, variáveis de ambiente, seeds e comandos de teste.",
          href: "https://github.com/Lucassilva027/philomedia"
        },
        {
          label: "Documentação da API (Swagger)",
          detail:
            "Contratos REST interativos na instância em produção: quotes, matches, TMDB e camada de IA.",
          href: "https://philomedia.onrender.com/api-docs"
        },
        {
          label: "PhiloMedia em produção",
          detail:
            "Aplicação publicada no Render com fluxo de busca TMDB, detalhe da obra, citação e leitura interpretativa.",
          href: "https://philomedia.onrender.com/html/index.html"
        },
        {
          label: "Site jurídico em produção",
          detail:
            "Institucional na Cloudflare Pages com formulário, FAQ e CTAs para canais de contato.",
          href: "https://polesso-oliveira-advogados.pages.dev/"
        },
        {
          label: "LinkedIn",
          detail:
            "Trajetória, formação e recomendações públicas no perfil profissional.",
          href: "https://www.linkedin.com/in/lucas-oliveira-silva032/"
        },
        {
          label: "Currículo (PT-BR)",
          detail:
            "Versão em português: experiências, formação e stack para o mercado local.",
          href: "/curriculo_lucas.pdf"
        },
        {
          label: "Resume — Intern Full Stack Developer (EN)",
          detail:
            "Versão em inglês focada em estágio / internship full stack.",
          href: "/Lucas_Silva_Resume.pdf"
        }
      ]
    }
  };
}

module.exports = { getProfile };
