import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo + overlay */}
      <div className="logo-container">
        <div className="logo-wrapper">
          <div className="logo-overlay"></div>
          <div className="logo-text">
            <div className="logo">Skin Sync</div>
            <div className="slogan">Matching you to your perfect skin care</div>
          </div>
        </div>
      </div>

      {/* Hamburger button */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/skin-quiz" onClick={() => setMenuOpen(false)}>Skin Quiz</Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        </ul>
      </nav>

      
      <div className="header-line"></div>
    </header>
  );
}

export default Header;
