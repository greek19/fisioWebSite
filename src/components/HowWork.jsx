import studio from "../asset/img/studio1.jpg";
import studio2 from "../asset/img/studio2.png";
import studio3 from "../asset/img/studio3.jpg";
import ImageSlider from "./ImageSlider";

export default function HowWork() {
  return (
    <section
      id="come-lavoro"
      className="section section--tinted"
      aria-labelledby="method-title"
    >
      <div className="site-container method-grid">
        <div className="method-copy">
          <h2 id="method-title" className="section-title">
            Come lavoro
          </h2>
          <p>
            Ogni percorso inizia sempre con un’attenzione particolare alla tua
            salute. Prima di avviare qualsiasi trattamento, effettuo uno
            screening approfondito (screening for referral) per verificare che i
            tuoi sintomi rientrino nelle competenze fisioterapiche. Se emergono
            segnali che richiedono l’intervento di un medico o di un altro
            specialista, sarò il primo a indirizzarti con trasparenza: la
            priorità è che tu riceva le cure più adatte.
          </p>
          <p>
            Successivamente passo alla valutazione funzionale, durante la quale
            analizzo postura, mobilità, forza muscolare, dolore e capacità
            funzionali. Questo mi permette di capire non solo il sintomo, ma
            anche le cause che lo hanno generato, così da costruire un piano
            terapeutico personalizzato.
          </p>
          <p>
            Il trattamento che ne deriva è sempre mirato: utilizzo le tecniche
            più appropriate in base alle tue necessità, che possono includere
            terapia manuale, esercizi specifici e, quando indicato, terapie
            fisiche.
          </p>
          <p>
            Infine, credo fortemente nel valore dell’educazione e della
            prevenzione: per questo ti accompagno a comprendere cosa sta
            accadendo al tuo corpo e ti fornisco strumenti pratici (esercizi,
            strategie e consigli) per favorire il recupero e ridurre il rischio
            di recidive.
          </p>
        </div>
        <ImageSlider images={[studio, studio2, studio3]} />
      </div>
    </section>
  );
}
