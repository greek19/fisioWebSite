import React from "react";

export default function Footer() {
    return (
        <footer className="py-4 bg-white border-top">
            <div className="container text-center text-muted small">© {new Date().getFullYear()} Ruben Rausa — Via Valdagno 6A, Bolzano — email: rubenrausa@gmail.com — P.IVA: IT04943970758</div>
        </footer>
    );
}