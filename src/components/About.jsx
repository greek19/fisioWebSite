import React from "react";

export default function About() {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-5">
                        <img src="https://images.unsplash.com/photo-1584467735858-7a5b6c3a3b5f?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a7c8d6e5f4b3a2c1d0e9f8a7b6c5d4e" alt="about" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-md-7">
                        <h2 className="fw-bold text-success">Chi sono</h2>
                        <p className="text-muted">Sono un fisioterapista con anni di esperienza in riabilitazione muscolo-scheletrica, terapia manuale e programmi personalizzati per sportivi e non. Lavoro con approccio evidence-based e attenzione alla persona.</p>
                        <ul className="list-inline">
                            <li className="list-inline-item badge bg-light text-dark border">Laurea in Fisioterapia</li>
                            <li className="list-inline-item badge bg-light text-dark border">Master in Terapia Manuale</li>
                            <li className="list-inline-item badge bg-light text-dark border">Specialista in Riabilitazione Sportiva</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}