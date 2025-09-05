import { useState, useEffect } from "react";
import logo from '../asset/img/Rausa Ruben logo horizontal.png'

export function Navbar({ activeSection, setActiveSection }) {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setExpanded(false);
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-md navbar-light fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
            style={{ zIndex: 1000, transition: 'background-color 0.3s ease' }}
        >
            <div className="container">
                <a
                    className="navbar-brand fw-bold fw-900 text-primary-custom"
                    href="#home"
                    onClick={(e) => handleNavClick(e, 'home')}
                >
                    <img src={logo} id="logoImage" alt="logo" className="mx-3"/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0 d-lg-flex float-end ">
                        {['home','chi sono','come lavoro', 'servizi','contatti'].map((id) => (
                            <li className="nav-item " key={id}>
                                <a
                                    className={`nav-link ${activeSection === id ? 'active fw-bold text-primary-custom' : 'fw-bold'}`}
                                    href={`#${id}`}
                                    onClick={(e) => handleNavClick(e, id)}
                                >
                                    {id === 'home' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}