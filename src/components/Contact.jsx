import React, {useState} from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Simulazione invio\n' + JSON.stringify(form, null, 2));
    };
    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center fw-bold title-primary mb-4">Contatti</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Nome</label>
                                        <input className="form-control" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Messaggio</label>
                                        <textarea className="form-control" rows="4" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required></textarea>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary-custom btn-lg">Invia richiesta</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text-center text-muted small mt-3">Oppure telefona al <strong>+39 333 123 4567</strong></div>
                    </div>
                </div>
            </div>
        </section>
    );
}