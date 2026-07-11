import image from "../asset/img/front.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <img
        className="hero-media"
        src={image}
        alt="Fisioterapia"
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-copy">
          <h1 id="hero-title">Ritrova il tuo benessere</h1>
          <p className="hero-description">
            Fisioterapia personalizzata, in studio e direttamente a casa tua.
          </p>
          <div className="hero-actions">
            <a className="button button--light" href="#contatti">
              Prenota una visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
