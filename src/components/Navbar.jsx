import { useEffect, useState } from "react";
import logo from "../asset/img/Rausa Ruben logo horizontal.png";

const links = [
  ["home", "Home"],
  ["chi-sono", "Chi sono"],
  ["come-lavoro", "Come lavoro"],
  ["servizi", "Servizi"],
];

export function Navbar({ activeSection }) {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${expanded ? "is-open" : ""}`}
    >
      <nav className="site-container nav-shell" aria-label="Navigazione principale">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Ruben Rausa fisioterapia, torna alla home"
        >
          <img
            src={logo}
            width="600"
            height="174"
            alt="Ruben Rausa Fisioterapia"
          />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={expanded ? "Chiudi menu" : "Apri menu"}
          aria-expanded={expanded}
          aria-controls="main-menu"
          onClick={() => setExpanded((value) => !value)}
        >
          <span aria-hidden="true">{expanded ? "×" : "☰"}</span>
        </button>
        <div id="main-menu" className={`nav-menu ${expanded ? "open" : ""}`}>
          <ul className="nav-list">
            {links.map(([id, label]) => (
              <li key={id}>
                <a
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  aria-current={activeSection === id ? "page" : undefined}
                  href={`#${id}`}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a className="nav-link nav-cta" href="#contatti" onClick={closeMenu}>
                Prenota una visita
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
