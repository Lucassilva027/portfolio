# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recrutadores e tech leads avaliando Lucas para estágio / início de carreira em desenvolvimento de software. Chegam com pouco tempo, querem prova técnica rápida (demos, GitHub, decisões) e um sinal de pessoa real — não um template genérico.

## Product Purpose

Portfólio pessoal bilingue (PT/EN) que apresenta cases com contexto, decisões técnicas e resultado, além de links para demos em produção, repositórios e currículos em PDF. Sucesso = o visitante entende o que Lucas constrói, confia na profundidade técnica e lembra de quem ele é o bastante para responder a um contato.

## Positioning

Não é só uma lista de stacks: é um portfólio de cases documentados (desafio → escopo → entrega → decisões → resultado) com demos reais, mantendo voz e personalidade — ritmo, curiosidade e profundidade — sem virar colagem de hobbies.

## Operating Context

Visitado no desktop e no mobile; conteúdo servido por Express + EJS (SSR); rotas `/` (EN) e `/pt` (PT); deploy em Render. O visitante escaneia hero + cases, abre modal de detalhe, clica demos/repos/PDFs e usa e-mail, WhatsApp ou LinkedIn.

## Capabilities and Constraints

- Arquitetura MVC (Express, EJS, models/controllers/i18n) preservada.
- Cases com desafio, escopo, stack, entrega, resultado e estudo de caso no modal — não remover.
- Bilingue PT/EN; links de produção, GitHub e PDFs de currículo permanecem.
- Personalidade (basquete, piano, animes, filosofia) entra como parágrafo curto no Sobre e como clima visual — não como ícones literais de hobby, salvo se uma direção escolhida no Impeccable o exigir de forma elegante.
- Stack atual: Node.js, Express, EJS. Atualizações de dependências devem manter o app rodando.
- Em aberto: direção visual final (sorteio Impeccable); atualização da skill Impeccable para v4.8.2 em sessão posterior.

## Brand Commitments

- Nome: Lucas Oliveira da Silva.
- Tom: técnico, claro, humano — sem hype vazio.
- Personalidade vinculante: basquete, piano, animes e filosofia devem transparecer no clima e no Sobre (parágrafo curto), não como mural temático.
- Identidade deve ser única e distinta do padrão “dark tech purple + Inter”.

## Evidence on Hand

- Projetos: PhiloMedia, Empório da Música (agente AI), Pirate Battle, Polesso & Oliveira, Handcrafted Haven, Tatame Manager, Nota Fiscal — com copy e links no repositório. PhiloMedia e Tatame Manager ainda não estão completos (próximos do fechamento).
- Assets: PDFs de currículo em `public/`, imagens de projetos em `public/images/`.
- Não inventar clientes, métricas ou endorsements que não existam.

## Product Principles

1. Prova antes de pose — demos, código e decisões técnicas lideram.
2. Pessoa legível — personalidade em voz e ritmo, sem gimmick.
3. Escaneável em minutos — hierarquia clara para recrutador apressado.
4. Bilíngue e honesto — PT/EN equivalentes; status online vs. implementação explícito.
5. Um mundo visual — identidade coerente de ponta a ponta, não polish no look antigo.

## Accessibility & Inclusion

Navegação por teclado, skip link e contraste legível permanecem requisitos. Respeitar `prefers-reduced-motion` em animações novas.
