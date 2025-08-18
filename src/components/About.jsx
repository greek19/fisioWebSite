import React from "react";
import studio from '../asset/img/about.jpg'

export default function About() {
    return (
        <section id="chi sono" className="py-5">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-5">
                        <img src={studio} alt="about" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-md-7 text-primary-custom">
                        <h2 className="fw-bold text-primary-custom">Chi sono</h2>
                        <h5>
                            Sono Ruben Rausa, fisioterapista specializzato in terapia manuale ortopedica (OMT).
                            </h5>
                        <h5>
                            La mia missione è aiutare le persone a ritrovare benessere e autonomia: da oltre 10 anni offro trattamenti mirati e personalizzati, costruiti sulle esigenze di ogni paziente.
                        </h5>
                        <h5>
                            Grazie alla formazione continua e alle esperienze maturate con atleti di hockey, sci e tennis, tratto un’ampia gamma di problematiche fisioterapiche e, quando necessario, indirizzo verso il professionista sanitario più adatto.
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
}