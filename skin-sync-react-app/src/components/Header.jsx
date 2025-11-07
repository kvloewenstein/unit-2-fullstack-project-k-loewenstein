import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };


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
         {!isLoggedIn ? (
            <>
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
              <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/profile" onClick={() => setMenuOpen(false)}>My Profile</Link></li>
              <li><button onClick={handleLogout}style={{ padding: ".5rem 0.5rem", fontSize: "0.8rem" }}>Logout</button></li>
            </>
          )}
        </ul>
      </nav>

      
      <div className="header-line"></div>
    </header>
  );
}

export default Header;
