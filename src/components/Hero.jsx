import React from "react";
import image from '../asset/img/front.jpg';

export default function Hero() {
    return (
        <section
            id="home"
            className="hero d-flex align-items-center position-relative"
            style={{minHeight: '100vh'}}
        >
            {/* Immagine di sfondo */}
            <img
                src={image}
                alt="fisioterapia"
                className="w-100 h-100 position-absolute top-0 start-0"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'top',
                    zIndex: 0
                }}
            />

            {/* Contenuto in overlay */}
            <div className="container text-white position-relative" style={{zIndex: 1}}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bold text-success">
                            Ritrova il tuo benessere
                        </h1>
                        <p className="lead mb-4">
                            Trattamenti personalizzati, professionali e su misura per tornare a muoverti senza dolore.
                        </p>
                        <a
                            href="#contact"
                            className="btn btn-success btn-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            Prenota una visita
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
