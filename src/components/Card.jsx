import '../asset/css/card.css'

export default function Card() {

    return (
        <div className="card-custom">
            <div className="content">
                <p className="heading">Ritrova il tuo benessere</p>
                <p className="para fs-4">
                    Fisioterapia personalizzata, in studio e direttamente a casa tua.
                    <div>
                        <a
                            href="#contact"
                            className="btn btn-lg btn-card mt-5"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contatti').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Prenota una visita
                        </a>
                    </div>
                </p>
            </div>
        </div>
    )
}
