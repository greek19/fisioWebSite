import Slider from "./Slider";
import studio from "../asset/img/studio1.jpg";
import studio2 from "../asset/img/studio2.png";
import studio3 from "../asset/img/studio3.jpg";
import React from "react";
import ImageSlider from "./ImageSlider";

export default function HowWork() {
    const services = [
        {
            title: "1. Screening for referral",
            desc: (
                <>
                    Verifico attentamente che i tuoi <strong>sintomi</strong> rientrino nelle competenze fisioterapiche.
                    <br />
                    Se necessario, ti indirizzo con trasparenza verso un <strong>medico</strong> o uno <strong>specialista</strong>: la tua salute viene prima di tutto.
                </>
            )
        },
        {
            title: "2. Valutazione funzionale",
            desc: (
                <>
                    Analizzo postura, forza, mobilità, dolore e funzione per individuare le <strong>cause</strong> del problema e costruire un piano terapeutico su misura.
                </>
            )
        },
        {
            title: "3. Trattamento mirato",
            desc: (
                <>
                    Applico le <strong>tecniche più adatte</strong> al tuo caso, tra cui terapia manuale, esercizi specifici e terapie fisiche.
                </>
            )
        },
        {
            title: "4. Educazione e prevenzione",
            desc: (
                <>
                    Ti spiego cosa sta accadendo al tuo corpo e ti fornisco strumenti pratici (<strong>esercizi, educazione, strategie</strong>) per recuperare e prevenire ricadute.
                </>
            )
        }
    ];
    const sliderImages = [
        studio,
        studio2,
        studio3
    ];

    return (
        <section id="come lavoro" className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10 title-primary">
                Come lavoro
            </h2>

            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col text-primary-custom space-y-4">
                        <h5>
                            <strong>Un approccio clinico e personalizzato</strong>
                        </h5>
                        <p>
                            Il mio sarà un approccio che integra la comprensione dei <strong>fattori psicologici</strong> che influenzano dolore e recupero.
                            Questo metodo permette di ottenere risultati più <strong>completi</strong> e <strong>duraturi</strong>.
                        </p>
                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mt-12">
                            {services.map((s, i) => (
                                <div
                                    key={i}
                                    className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition mb-2"
                                >
                                    <h4 className="text-l font-semibold mb-3">{s.title}</h4>
                                    <div className="text-gray-700 text-sm">{s.desc}</div>
                                </div>
                            ))}
                        </div>
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
