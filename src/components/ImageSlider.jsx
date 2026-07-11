import { useCallback, useEffect, useState } from "react";

export default function ImageSlider({ images }) {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const move = useCallback((direction) => {
    setActive((index) => (index + direction + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, move]);

  const sliderControls = (modifier = "") => (
    <>
      <div className={`gallery-dots ${modifier}`}>
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`gallery-dot ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
            aria-label={`Mostra immagine ${index + 1}`}
            aria-current={active === index ? "true" : undefined}
          />
        ))}
      </div>
      <div className={`gallery-buttons ${modifier}`}>
        <button
          className="gallery-button"
          type="button"
          onClick={() => move(-1)}
          aria-label="Immagine precedente"
        >
          ←
        </button>
        <button
          className="gallery-button"
          type="button"
          onClick={() => move(1)}
          aria-label="Immagine successiva"
        >
          →
        </button>
      </div>
    </>
  );

  return (
    <>
      <div
        className="gallery"
        role="region"
        aria-label="Galleria dello studio"
        aria-roledescription="carousel"
      >
        <img
          className="gallery-backdrop"
          src={images[active]}
          alt=""
          aria-hidden="true"
        />
        <button
          className="gallery-open"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`Ingrandisci immagine ${active + 1}`}
        >
          <img
            className="gallery-image"
            src={images[active]}
            width="900"
            height="1125"
            loading="lazy"
            alt={`Studio fisioterapico, immagine ${active + 1} di ${images.length}`}
          />
          <span className="gallery-zoom" aria-hidden="true">↗</span>
        </button>
        <div className="gallery-controls">{sliderControls()}</div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Galleria immagini a schermo intero"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Chiudi galleria"
            autoFocus
          >
            ×
          </button>
          <img
            className="lightbox-image"
            src={images[active]}
            alt={`Studio fisioterapico, immagine ${active + 1} di ${images.length}`}
          />
          <div className="lightbox-controls">{sliderControls("lightbox-control")}</div>
          <p className="lightbox-counter" aria-live="polite">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
