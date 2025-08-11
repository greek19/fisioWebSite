import {useState} from "react";

export function Navbar({ activeSection, setActiveSection }) {
    const [expanded, setExpanded] = useState(false);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setExpanded(false);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold text-success" href="#home" onClick={(e)=>handleNavClick(e,'home')}>FisioPro</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        {['home','about','services','testimonials','contact'].map((id) => (
                            <li className="nav-item" key={id}>
                                <a
                                    className={`nav-link ${activeSection === id ? 'active fw-bold text-success' : ''}`}
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