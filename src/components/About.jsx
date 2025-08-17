import React from "react";
import studio from '../asset/img/about.jpg'

export default function About() {
    return (
        <section id="chi sono" className="py-5">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-5">
                        <img src={studio} alt="about" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-md-7 text-primary-custom">
                        <h2 className="fw-bold text-primary-custom">Chi sono</h2>
                        <h5>
                            Sono Ruben Rausa, fisioterapista con oltre 10 anni di esperienza nel trattamento di
                            problematiche muscolo-scheletriche.
                        </h5>
                        <h5>
                            Il mio obiettivo è aiutare le persone a muoversi
                            meglio, vivere con meno dolore e recuperare la propria autonomia, nel modo più
                            sicuro e rispettoso possibile. Le esperienze di lavoro con atleti di alto livello nel
                            mondo del tennis e dell’hockey mi hanno arricchito professionalmente e mi hanno
                            insegnato quanto sia importante un approccio preciso, individuale e orientato al
                            risultato.
                        </h5>
                        <h5>
                            Oggi metto queste competenze al servizio di sportivi e pazienti di ogni età, trattando
                            un’ampia gamma di disturbi muscolo-scheletrici.
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
}