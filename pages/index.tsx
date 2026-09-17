import Head from 'next/head';

const features = [
  ['Branding & presença digital', 'Estruturas visuais modernas para destacar Elisa30Creative e Terra360.'],
  ['Landing pages premium', 'Páginas claras, responsivas e focadas em uma boa experiência.'],
  ['Conteúdo pronto para publicar', 'Arquivos organizados para divulgação e manutenção contínua.'],
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Elisa — Terra360</title>
        <meta name="description" content="Elisa30Creative e Terra360 — demonstração e desenvolvimento web." />
      </Head>
      <main className="site-shell">
        <header className="topbar">
          <a className="brand" href="#inicio"><span>E</span><strong>Elisa</strong><small>Terra360</small></a>
          <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav>
          <a className="button button-primary" href="#contato">Falar com Elisa</a>
        </header>

        <section className="hero" id="inicio">
          <div>
            <span className="eyebrow">Projeto unificado</span>
            <h1>Elisa30Creative <em>=</em> Terra360</h1>
            <p>Uma plataforma de demonstração e desenvolvimento web para presença digital, identidade visual e experiências modernas.</p>
            <div className="actions"><a className="button button-primary" href="#servicos">Ver serviços</a><a className="button button-secondary" href="#sobre">Conhecer a marca</a></div>
          </div>
          <div className="hero-card"><span>Terra360</span><h2>Digital, direção e presença.</h2><p>Estratégia visual, comunicação e criação digital em uma só base.</p><strong>● Ready to publish</strong></div>
        </section>

        <section id="servicos" className="section"><span className="eyebrow">Serviços</span><h2>Um espaço pensado para crescer online</h2><div className="cards">{features.map(([title, text], index) => <article className="card" key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section id="sobre" className="about"><div><span className="eyebrow">Sobre o projeto</span><h2>Uma base sólida para a identidade Terra360</h2></div><div><p>O Terra360 centraliza a marca Elisa30Creative em uma estrutura moderna, funcional e pronta para receber novos conteúdos, campanhas e arquivos públicos.</p><ul><li>Next.js preparado para produção</li><li>Arquivos públicos organizados</li><li>Layout responsivo para todos os dispositivos</li></ul></div></section>

        <section id="contato" className="cta"><div><span className="eyebrow">Vamos publicar</span><h2>Pronto para dar vida ao projeto na web?</h2></div><a className="button button-primary" href="mailto:elisa30creative@gmail.com">Entrar em contato</a></section>
        <footer>© {new Date().getFullYear()} Elisa30Creative · Terra360</footer>
      </main>
    </>
  );
}
