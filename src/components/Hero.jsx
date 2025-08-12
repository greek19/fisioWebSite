import React from "react";
import image from '../asset/img/front.jpg';
import Card from "./Card";

export default function Hero() {
    return (
        <section
            id="home"
            className="hero d-flex align-items-center position-relative"
            style={{ minHeight: '100vh' }}
        >
            <img
                src={image}
                alt="fisioterapia"
                className="w-100 h-100 position-absolute top-0 start-0"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center 20%', // sposta leggermente in basso il taglio
                    zIndex: 0
                }}
            />

            {/* Contenuto in overlay */}
            <div className="container text-white position-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    <Card />
                </div>
            </div>
        </section>
    );
}