import React from "react";

export default function Hero() {
    return (
        <section id="home" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bold text-success">Ritrova il tuo benessere</h1>
                        <p className="lead text-muted mb-4">Trattamenti personalizzati, professionali e su misura per tornare a muoverti senza dolore.</p>
                        <a href="#contact" className="btn btn-success btn-lg" onClick={(e)=>{e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>Prenota una visita</a>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="https://images.unsplash.com/photo-1580281657526-60390118a8a1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2c6b6d6b0b2e5a6b8c6e9b1f3b1b4d6c" alt="fisioterapia" className="img-fluid rounded shadow-sm mt-4" />
                    </div>
                </div>
            </div>
        </section>
    );
}