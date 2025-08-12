import Slider from "./Slider";

export default function Services() {
    const services = []

    return (
        <section id="servizi" className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10 title-primary">
                Servizi Offerti
            </h2>

            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col text-primary-custom">
                        <h5>
                            Ogni visita inizia con uno screening for referral: valuto se i sintomi rientrano nelle competenze fisioterapiche oppure richiedono l’intervento di un altro professionista sanitario, come un medico.
                        </h5>

                        <h5>
                            Se necessario, ti guiderò verso il percorso medico più adatto. La tua salute viene prima di tutto.
                        </h5>
                        <h5>
                            Il mio sarà un approccio che integra la comprensione dei fattori psicologici che influenzano dolore e recupero. Questo metodo permette di considerare il paziente non solo per il sintomo fisico, ma anche per gli aspetti emotivi e mentali legati all’esperienza del dolore, ottenendo risultati più completi e duraturi.
                        </h5>
                        <h5>
                            Il piano terapeutico sarà individualizzato e terrà conto di tutte le tue esigenze. Tutti i trattamenti proposti sono preceduti da una valutazione funzionale approfondita, che permette di scegliere quello ideale.
                        </h5>
                    </div>
                </div>
            </div>

            <Slider />

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
                    >
                        <h3 className="text-xl font-semibold text-green-600 mb-3">{s.title}</h3>
                        <p className="text-gray-600">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
