import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>Enaa'<span style={{ color: "#9CC943" }}>s</span> Store</h1>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${menuOpen ? "open" : ""}`} />
      </button>

      <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Accueil</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>Produits</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        <li className="nav-cta-mobile">
          <button onClick={() => setMenuOpen(false)}>Get Started</button>
        </li>
      </ul>
      <button className="nav-cta-desktop">Pannier</button>
    </nav>
  );
};

export default Header;