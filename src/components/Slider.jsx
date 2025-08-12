import '../asset/css/slider.css'

export default function Slider() {
    const treatments = [
        {
            title: "Terapia manuale",
            description: "Trattamento delle disfunzioni muscoloscheletriche",
            gradient: "linear-gradient(to right, var(--primary-color), var(--primary-light))"
        },
        {
            title: "Esercizio terapeutico",
            description: "Programmi personalizzati di riabilitazione",
            gradient: "linear-gradient(to right, var(--primary-dark), var(--primary-color))"
        },
        {
            title: "Tecar terapia",
            description: "Terapia ad energia capacitiva e resistiva",
            gradient: "linear-gradient(to right, var(--primary-light), var(--primary-color))"
        },
        {
            title: "Laser terapia",
            description: "Trattamento con laser ad alta potenza",
            gradient: "linear-gradient(135deg, var(--primary-color), var(--primary-dark))"
        },
        {
            title: "Elettroterapia",
            description: "Stimolazione elettrica per il recupero",
            gradient: "linear-gradient(45deg, var(--primary-dark), var(--primary-light))"
        },
        {
            title: "Riabilitazione neurologica",
            description: "Recupero delle funzioni neurologiche",
            gradient: "linear-gradient(to bottom right, var(--primary-color), var(--primary-light))"
        },
        {
            title: "Trattamento DTM",
            description: "Disordini cranio-temporo-mandibolari",
            gradient: "linear-gradient(to top right, var(--primary-light), var(--primary-dark))"
        },
        {
            title: "Riabilitazione ortopedica",
            description: "Recupero post-traumatico e post-chirurgico",
            gradient: "linear-gradient(180deg, var(--primary-dark), var(--primary-color))"
        }
    ];

    return (
        <div className="slider my-5">
            <div className="list">
                {treatments.map((treatment, index) => (
                    <div
                        key={index}
                        className="item"
                        style={{ '--position': index + 1 }}
                    >
                        <div
                            className="card"
                            style={{ background: treatment.gradient }}
                        >
                            <h2 className='text-white'>{treatment.title}</h2>
                            <p className='fw-bold'>{treatment.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}