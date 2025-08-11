import React from "react";

export default function Testimonials() {
    const list = [
        { name: 'Giulia R.', text: 'Grazie a FisioPro sono tornata a correre senza dolore.' },
        { name: 'Marco L.', text: 'Professionale, attento e molto competente.' },
        { name: 'Anna P.', text: 'Trattamenti efficaci e ambiente accogliente.' },
    ];

    return (
        <section id="testimonials" className="py-5">
            <div className="container">
                <h2 className="text-center fw-bold text-success mb-4">Testimonianze</h2>
                <div className="row gy-4">
                    {list.map((t, i) => (
                        <div className="col-md-4" key={i}>
                            <div className="card h-100 border-0 shadow-sm p-3">
                                <div className="card-body">
                                    <p className="card-text">“{t.text}”</p>
                                </div>
                                <div className="card-footer bg-transparent border-0 text-muted">— {t.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}