import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>🌸 Ananta Chakra</div>

      {/* Hamburger menu (visible on mobile) */}
      <div style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Links */}
      <ul style={{ 
        ...styles.navLinks, 
        ...(isOpen ? styles.showMenu : {}) 
      }}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#chakras" style={styles.link}>Chakras</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "linear-gradient(90deg, #7b2ff7, #f107a3)",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  hamburger: {
    fontSize: "24px",
    cursor: "pointer",
    display: "none", // hidden by default
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  showMenu: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
};

// Responsive styles using plain CSS
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @media (max-width: 768px) {
    ul {
      display: none !important;
    }
    div[style*="hamburger"] {
      display: block !important;
    }
  }
`, styleSheet.cssRules.length);

export default Navbar;
