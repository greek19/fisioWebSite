import React from "react";

export default function Footer() {
    return (
        <footer className="py-4 bg-white border-top">
            <div className="container text-center text-muted small">© {new Date().getFullYear()} FisioPro — Via Esempio 10, Città</div>
        </footer>
    );
}