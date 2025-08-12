import '../asset/css/card.css'

export default function Card() {

    return (
        <div className="card-custom">
            <div className="content">
                <p className="heading">Ritrova il tuo benessere</p>
                <p className="para">
                    Trattamenti personalizzati, professionali e su misura sia a domicilio che in studio.
                    <a
                        href="#contact"
                        className="btn btn-lg btn-card mt-5"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Prenota una visita
                    </a>
                </p>
            </div>
        </div>
    )
}
