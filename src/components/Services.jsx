export default function Services() {
    const services = [
        { title: "Fisioterapia", desc: "Trattamenti mirati per dolori e riabilitazione." },
        { title: "Massoterapia", desc: "Massaggi terapeutici per muscoli e articolazioni." },
        { title: "Riabilitazione post-trauma", desc: "Percorsi personalizzati di recupero." },
    ];

    return (
        <section id="services" className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
                Servizi Offerti
            </h2>
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
