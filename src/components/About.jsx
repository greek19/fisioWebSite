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
                        <p className="text-muted">
                            Sono Ruben Rausa, fisioterapista con oltre 10 anni di esperienza nel trattamento di problematiche muscolo-scheletriche.  Il mio obiettivo è aiutare le persone a muoversi meglio, vivere con meno dolore e recuperare la propria autonomia, nel modo più sicuro e rispettoso possibile. Le esperienze di lavoro con atleti di alto livello nel mondo del tennis e dell’hockey mi hanno arricchito professionalmente e mi hanno insegnato quanto sia importante un approccio preciso, individuale e orientato al risultato.
                            Oggi metto queste competenze al servizio di sportivi e pazienti di ogni età, trattando un’ampia gamma di disturbi muscolo-scheletrici.
                        </p>
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