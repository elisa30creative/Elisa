import Head from 'next/head';

const features = [
  [
    'Reportar e Alertar',
    'Registar observações ambientais com local, data, descrição e evidências, indicando o estado de verificação.',
  ],
  [
    'Monitoria de Campo',
    'Organizar informação sobre campanhas, áreas observadas, agricultura e alterações ambientais.',
  ],
  [
    'Biodiversidade e Conservação',
    'Promover a protecção de ecossistemas, mangais, litoral, florestas, solos e recursos naturais.',
  ],
  [
    'Agricultura Sustentável',
    'Partilhar conhecimentos e iniciativas para uma produção agrícola responsável e resiliente.',
  ],
  [
    'Educação e Informação',
    'Facilitar o acesso a conteúdos, documentos e conhecimentos agroambientais.',
  ],
  [
    'Parcerias e Iniciativas',
    'Dar visibilidade a projectos comunitários e aproximar comunidades, especialistas e organizações.',
  ],
];

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Terra360 — Consciência, Educação, Informação e Acção Agroambiental
        </title>
        <meta
          name="description"
          content="Terra360: plataforma digital de consciência, educação, informação e acção agroambiental, com foco inicial em Moçambique."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="site-shell">
        <header className="topbar">
          <a className="brand" href="#inicio" aria-label="Terra360 — Início">
            <span>E</span>
            <strong>Elisa</strong>
            <small>Terra360</small>
          </a>

          <nav aria-label="Navegação principal">
            <a href="#areas">Áreas de acção</a>
            <a href="#sobre">Missão</a>
            <a href="#participar">Participar</a>
            <a href="#contato">Contacto</a>
          </nav>

          <a className="button button-primary" href="#participar">
            Colaborar
          </a>
        </header>

        <section className="hero" id="inicio">
          <div>
            <span className="eyebrow">
              Elisa30Creative = Terra360
            </span>
            <h1>Conhecer. Proteger. Agir.</h1>
            <p>
              Uma plataforma digital de consciência, educação,
              informação e acção agroambiental. Ligamos conhecimento,
              comunidades e iniciativas para contribuir para um futuro
              mais sustentável, começando por Moçambique.
            </p>

            <div className="actions">
              <a className="button button-primary" href="#areas">
                Explorar áreas de acção
              </a>
              <a className="button button-secondary" href="#sobre">
                Conhecer a missão
              </a>
            </div>
          </div>

          <div className="hero-card">
            <span>Terra360</span>
            <h2>O ambiente é uma responsabilidade partilhada.</h2>
            <p>
              Conhecimento, educação, colaboração e informação
              para valorizar as pessoas e proteger os recursos naturais.
            </p>
            <strong>Consciência · Educação · Acção</strong>
          </div>
        </section>

        <section id="areas" className="section">
          <span className="eyebrow">Áreas de acção</span>
          <h2>Conhecimento ao serviço das comunidades e do ambiente</h2>

          <div className="cards">
            {features.map(([title, text], index) => (
              <article className="card" key={title}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre" className="about">
          <div>
            <span className="eyebrow">A nossa missão</span>
            <h2>Uma plataforma aberta ao conhecimento e à colaboração</h2>
          </div>

          <div>
            <p>
              A Terra360 é o projecto agroambiental unificado com
              Elisa30Creative. Pretende promover consciência, educação,
              informação e acção, valorizando iniciativas locais e
              aproximando cidadãos, comunidades, técnicos, universidades,
              instituições e organizações parceiras.
            </p>

            <ul>
              <li>Participação aberta e não partidária</li>
              <li>Valorização de fontes, autoria e evidências</li>
              <li>Cooperação para benefícios sociais e ambientais</li>
              <li>Foco local, com visão regional, africana e global</li>
            </ul>
          </div>
        </section>

        <section id="participar" className="section">
          <span className="eyebrow">Participar</span>
          <h2>O conhecimento cresce quando é partilhado</h2>
          <p>
            Comunidades, especialistas, instituições e parceiros podem
            contribuir com informação, experiências, iniciativas e
            propostas de colaboração.
          </p>
          <p>
            As observações e evidências recebidas devem ser analisadas
            e verificadas. Um relato submetido não constitui, por si só,
            confirmação de uma ocorrência ou denúncia.
          </p>
        </section>

        <section id="contato" className="cta">
          <div>
            <span className="eyebrow">Contacto e colaboração</span>
            <h2>Vamos contribuir para um futuro mais sustentável?</h2>
            <p>
              Contacte a Terra360 para partilhar iniciativas,
              conhecimentos ou propostas de parceria.
            </p>
          </div>

          <a
            className="button button-primary"
            href="mailto:elisa30creative@gmail.com?subject=Contacto%20Terra360"
          >
            Contactar a Terra360
          </a>
        </section>

        <footer>
          © {new Date().getFullYear()} Elisa30Creative · Terra360
          <p>Consciência, educação, informação e acção agroambiental.</p>
        </footer>
      </main>
    </>
  );
}
