import portrait from "../asset/img/ruben-circle.png";

export default function About() {
  return (
    <section id="chi-sono" className="section" aria-labelledby="about-title">
      <div className="site-container about-grid">
        <div className="portrait-frame">
          <div className="portrait-backdrop" aria-hidden="true" />
          <img
            className="portrait"
            src={portrait}
            width="768"
            height="768"
            loading="lazy"
            alt="Ruben Rausa, fisioterapista"
          />
        </div>

        <div className="about-copy">
          <h2 id="about-title" className="section-title">
            Chi sono
          </h2>
          <p>
            Sono Ruben Rausa, fisioterapista con oltre 10 anni di esperienza nel
            campo della terapia manuale e della riabilitazione. Il mio obiettivo
            è aiutare le persone a ritrovare benessere e autonomia, guidandole in
            un percorso terapeutico personalizzato e rispettoso delle esigenze
            individuali.
          </p>
          <p>
            Negli anni ho avuto l’opportunità di lavorare nel mondo dello sport
            professionistico, collaborando con atleti di alto livello. Oggi
            svolgo la mia attività come libero professionista, mettendo le mie
            competenze a disposizione non solo degli sportivi, ma di chiunque
            desideri migliorare la propria qualità di vita.
          </p>
          <p>
            Il mio percorso formativo si è focalizzato principalmente sul
            trattamento delle problematiche muscolo-scheletriche, senza
            trascurare i fattori psicologici che influenzano dolore e recupero.
            Questo approccio integrato permette di ottenere risultati più
            completi e duraturi.
          </p>
          <p>Le mie aree di specializzazione includono:</p>
          <ul className="specialties">
            <li>Terapia manuale</li>
            <li>Esercizio terapeutico</li>
            <li>Neurofisiologia applicata alle tecniche ad alta velocità</li>
          </ul>
          <a
            className="text-link"
            href={`${process.env.PUBLIC_URL}/file/cvRubenRausa.pdf`}
            download
          >
            SCARICA IL MIO CV
          </a>
        </div>
      </div>
    </section>
  );
}
