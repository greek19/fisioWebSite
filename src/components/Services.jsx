const services = [
  ["Terapia manuale", "Trattamento delle disfunzioni muscoloscheletriche"],
  ["Esercizio terapeutico", "Programmi personalizzati di riabilitazione"],
  ["Tecarterapia", "Terapia ad energia capacitiva e resistiva"],
  ["Laser terapia", "Trattamento con laser ad alta potenza"],
  ["Elettroterapia", "Stimolazione elettrica per il recupero"],
  ["Riabilitazione neurologica", "Recupero delle funzioni neurologiche"],
  ["Trattamento DTM", "Disordini cranio-temporo-mandibolari"],
  ["Riabilitazione ortopedica", "Recupero post-traumatico e post-chirurgico"],
  [
    "Magnetoterapia",
    "Terapia con campi magnetici per il recupero osseo e muscolare",
  ],
  ["Onde d'urto", "Trattamento non invasivo per patologie muscolotendinee"],
];

export default function Services() {
  return (
    <section id="servizi" className="section" aria-labelledby="services-title">
      <div className="site-container">
        <div className="services-header">
          <h2 id="services-title" className="section-title">
            Servizi
          </h2>
        </div>

        <div className="service-modes">
          <article className="mode-card">
            <h3>FISIOTERAPIA IN STUDIO</h3>
            <p>
              Presso lo Studio Fisiosport Cadamuro collaboro con un team
              qualificato per offrirti trattamenti completi e mirati, in un
              ambiente accogliente e professionale.
            </p>
          </article>
          <article className="mode-card">
            <h3>FISIOTERAPIA A DOMICILIO</h3>
            <p>
              Il servizio domiciliare è pensato per chi ha difficoltà a
              spostarsi o desidera ricevere trattamenti personalizzati nel
              proprio ambiente, senza rinunciare alla qualità.
            </p>
          </article>
        </div>

        <div
          className="services-slider"
          role="region"
          aria-label="Trattamenti disponibili"
          style={{ "--quantity": services.length }}
        >
          <div className="services-track">
            {services.map(([title, description], index) => (
              <article
                className="service-card"
                key={title}
                style={{ "--position": index + 1 }}
                tabIndex="0"
              >
                <span className="service-mark" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
