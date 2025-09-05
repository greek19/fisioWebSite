import React from "react";
import studio from '../asset/img/ruben-circle.png'

export default function About() {
    return (
        <section id="chi sono" className="py-5">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-5">
                        <img src={studio} alt="about" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-7 text-primary-custom">
                        <h2 className="fw-bold text-primary-custom">Chi sono</h2>
                        <h5 className='mb-3'>
                            Sono Ruben Rausa, fisioterapista con oltre 10 anni di esperienza nel campo della terapia manuale e della riabilitazione.
                            Il mio obiettivo è aiutare le persone a ritrovare benessere e autonomia, guidandole in un percorso terapeutico personalizzato e rispettoso delle esigenze individuali.
                        </h5>
                        <h5 className='mb-3'>
                            Negli anni ho avuto l’opportunità di lavorare nel mondo dello sport professionistico, collaborando con atleti di alto livello. Oggi svolgo la mia attività come libero professionista, mettendo le mie competenze a disposizione non solo degli sportivi, ma di chiunque desideri migliorare la propria qualità di vita.
                        </h5>
                        <h5 className='mb-3'>
                            Il mio percorso formativo si è focalizzato principalmente sul trattamento delle problematiche muscolo-scheletriche, senza trascurare i fattori psicologici che influenzano dolore e recupero. Questo approccio integrato permette di ottenere risultati più completi e duraturi.
                        </h5>
                        <h5 className='mb-3'>
                            Le mie aree di specializzazione includono:
                        </h5>
                        <ul className='h5 mv-3'>
                            <li>Terapia manuale</li>
                            <li>Esercizio terapeutico</li>
                            <li>Neurofisiologia applicata alle tecniche ad alta velocità</li>
                        </ul>
                        <h5>
                            SCARICA IL MIO CV
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
}