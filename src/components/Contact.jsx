import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", error: false });
  const [sending, setSending] = useState(false);

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus({ message: "", error: false });
    try {
      await emailjs.send(
        "service_g9l93ft",
        "template_tmudugs",
        form,
        "35KjVtv0RVYjBZDre",
      );
      setForm({ name: "", email: "", phone: "", message: "" });
      setStatus({
        message: "Richiesta inviata. Ti risponderò il prima possibile.",
        error: false,
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        message: "Invio non riuscito. Riprova oppure contattami su WhatsApp.",
        error: true,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contatti"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="site-container contact-grid">
        <div>
          <p className="eyebrow">Contatti</p>
          <h2 id="contact-title" className="section-title">
            Iniziamo dal tuo obiettivo.
          </h2>
          <p className="section-lead">
            Raccontami brevemente di cosa hai bisogno. Ti ricontatterò per capire
            insieme il percorso più adatto.
          </p>
          <div className="contact-details">
            <a className="contact-detail" href="tel:+393270504967">
              <span aria-hidden="true">↗</span> +39 327 050 4967
            </a>
            <a className="contact-detail" href="mailto:rubenrausa@gmail.com">
              <span aria-hidden="true">↗</span> rubenrausa@gmail.com
            </a>
            <span className="contact-detail">
              <span aria-hidden="true">⌖</span> Via Valdagno 6A, Bolzano
            </span>
            <a className="contact-detail" href="https://wa.me/393270504967" target="_blank" rel="noreferrer">
              <span aria-hidden="true">↗</span> Scrivimi su WhatsApp
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Nome e cognome</label>
              <input id="name" name="name" className="form-control" value={form.name} onChange={updateForm} autoComplete="name" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Telefono (facoltativo)</label>
              <input id="phone" name="phone" type="tel" className="form-control" value={form.phone} onChange={updateForm} autoComplete="tel" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" className="form-control" value={form.email} onChange={updateForm} autoComplete="email" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Come posso aiutarti?</label>
            <textarea id="message" name="message" className="form-control" value={form.message} onChange={updateForm} required />
          </div>
          <button className="button button--primary submit-button" disabled={sending}>{sending ? "Invio in corso…" : "Invia la richiesta"}</button>
          <p className={`form-status ${status.error ? "error" : ""}`} role="status" aria-live="polite">{status.message}</p>
        </form>
      </div>
    </section>
  );
}
