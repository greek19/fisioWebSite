import studio from "../asset/img/studio1.jpg";
import studio2 from "../asset/img/studio2.png";
import studio3 from "../asset/img/studio3.jpg";
import React from "react";
import ImageSlider from "./ImageSlider";

export default function HowWork() {
    const sliderImages = [
        studio,
        studio2,
        studio3
    ];

    return (
        <section id="come lavoro" className="py-16 bg-gray-50">
            <div className="container">
                <div className="row g-4">
                    <div className="col text-primary-custom space-y-4 mt-2">
                        <h2 className="text-3xl font-bold text-end mb-5 title-primary mt-4">
                            Come lavoro
                        </h2>
                        <h5 className='mb-3 mt-5'>
                            Ogni percorso inizia sempre con un’attenzione particolare alla tua salute. Prima di avviare qualsiasi trattamento, effettuo uno screening approfondito (screening for referral) per verificare che i tuoi sintomi rientrino nelle competenze fisioterapiche. Se emergono segnali che richiedono l’intervento di un medico o di un altro specialista, sarò il primo a indirizzarti con trasparenza: la priorità è che tu riceva le cure più adatte.
                        </h5>
                        <h5 className='mb-3'>
                            Successivamente passo alla valutazione funzionale, durante la quale analizzo postura, mobilità, forza muscolare, dolore e capacità funzionali. Questo mi permette di capire non solo il sintomo, ma anche le cause che lo hanno generato, così da costruire un piano terapeutico personalizzato.
                        </h5>
                        <h5 className='mb-3'>
                            Il trattamento che ne deriva è sempre mirato: utilizzo le tecniche più appropriate in base alle tue necessità, che possono includere terapia manuale, esercizi specifici e, quando indicato, terapie fisiche.
                        </h5>
                        <h5 className='mb-3'>
                            Infine, credo fortemente nel valore dell’educazione e della prevenzione: per questo ti accompagno a comprendere cosa sta accadendo al tuo corpo e ti fornisco strumenti pratici (esercizi, strategie e consigli) per favorire il recupero e ridurre il rischio di recidive.
                        </h5>
                    </div>
                    <div className="col-md-5">
                        <ImageSlider >
                            {sliderImages.map((image, index) => {
                                return <img key={index} src={image} alt={image} />;
                            })}
                        </ImageSlider>
                    </div>
                </div>
            </div>
        </section>
    );
}
