import Head from 'next/head';

const features = [
  {
    title: 'Branding & presença digital',
    text: 'Estruturas visuais modernas para destacar a marca Elisa30Creative e o projeto Terra360.',
  },
  {
    title: 'Landing pages premium',
    text: 'Páginas de apresentação com foco em conversão, clareza e navegação envolvente.',
  },
  {
    title: 'Conteúdo pronto para publicar',
    text: 'Arquivos organizados para compartilhamento, divulgação e manutenção contínua do projeto.',
  },
];

const stats = [
  { value: '360°', label: 'visão de marca' },
  { value: '24/7', label: 'presença online' },
  { value: 'Web', label: 'ecossistema digital' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Elisa — Terra360</title>
        <meta name="description" content="Elisa30Creative e Terra360 — plataforma de demonstração e desenvolvimento web." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page-shell">
        <header className="topbar">
          <div className="brand-wrap">
            <div className="brand-mark">E</div>
            <div><span className="brand-name">Elisa</span><small>Terra360</small></div>
          </div>
          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a>
          </nav>
          <a className="button button-primary" href="#contato">Falar com Elisa</a>
        </header>

        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">Projeto unificado</span>
            <h1>Elisa30Creative = Terra360</h1>
            <p>Uma plataforma de demonstração e desenvolvimento web com foco em presença digital, identidade visual e experiências modernas.</p>
            <div className="hero-actions"><a className="button button-primary" href="#servicos">Ver serviços</a><a className="button button-secondary" href="#sobre">Conhecer a marca</a></div>
            <div className="stats-row" aria-label="Estatísticas do projeto">
              {stats.map((item) => <div key={item.label} className="stat-item"><strong>{item.value}</strong><span>{item.label}</span></div>)}
            </div>
          </div>
          <div className="hero-panel" aria-label="Apresentação visual do projeto">
            <div className="panel-card panel-card-main"><span className="panel-label">Terra360</span><h2>Digital + direção + presença</h2><p>Estratégia visual, comunicação e criação digital em uma só base.</p></div>
            <div className="panel-card panel-card-small"><span>Projetos</span><strong>Ready to publish</strong></div>
          </div>
        </section>

        <section className="feature-section" id="servicos">
          <div className="section-heading"><span className="eyebrow">Serviços</span><h2>Um espaço pensado para crescer online</h2></div>
          <div className="feature-grid">
            {features.map((feature) => <article key={feature.title} className="feature-card"><div className="feature-icon">✦</div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="about-copy"><span className="eyebrow">Sobre</span><h2>Uma base sólida para mostrar a identidade do projeto</h2><p>O Terra360 foi pensado como um ambiente de apresentação e desenvolvimento web, centralizando a marca Elisa30Creative em uma estrutura moderna, funcional e pronta para evoluir com novos conteúdos e campanhas.</p></div>
          <div className="about-panel"><ul><li>Estrutura de publicação em Next.js</li><li>Arquivos públicos organizados para web</li><li>Base pronta para landing pages e portfólio</li></ul></div>
        </section>

        <section className="cta-section" id="contato"><div><span className="eyebrow">Vamos publicar</span><h2>Preparado para dar vida ao projeto na web</h2></div><a className="button button-primary" href="mailto:elisa30creative@gmail.com">Entrar em contato</a></section>
      </main>
    </>
  );
}
