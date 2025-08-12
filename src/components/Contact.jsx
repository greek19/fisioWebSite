import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: form.name,
            email: form.email,
            message: form.message
        };

        emailjs.send('service_g9l93ft', 'template_tmudugs', templateParams, '35KjVtv0RVYjBZDre')
            .then(() => {
                setStatus('Email inviata con successo!');
                setForm({ name: '', email: '', message: '' });
            }, (error) => {
                setStatus('Errore nell\'invio. Riprova più tardi.');
                console.error('EmailJS error:', error);
            });
    };

    return (
        <section id="contatti" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center fw-bold title-primary mb-4">Contatti</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Nome</label>
                                        <input className="form-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Messaggio</label>
                                        <textarea className="form-control" rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required></textarea>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary-custom btn-lg">Invia richiesta</button>
                                    </div>
                                </form>
                                {status && <div className="mt-3 text-center text-success fw-bold">{status}</div>}
                            </div>
                        </div>
                        <div className="text-center text-muted small mt-3">
                            Oppure <a
                            href="https://wa.me/393270504967"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none fw-bold text-success"
                        >
                            contattami su WhatsApp al +39 327 050 4967
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}