import React from "react";

function Hero() {
  return (
    <section
  id="home"
  style={{
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
  }}
>
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1, // 👈 keeps it behind text
    }}
  >
    <source src="/one.mp4" type="video/mp4" />
  </video>
    
     <h1 style={{ lineHeight: "1.2", textAlign: "center" }}>
  <span style={{ fontSize: "3.5rem", fontWeight: "400" }}>
    Awaken Your Consiousness                            
  </span>
  <br />
  <span style={{ fontSize: "2rem", fontWeight: "500" }}>
    With
  </span>
  <br />
  <span style={{ fontSize: "4rem", fontWeight: "700", color: "#ff6600" }}>
    Dynamic Energy Activation
  </span>
</h1>

      <p style={{ fontSize: "1.25rem", maxWidth: "700px", marginBottom: "2rem", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
        A practice rooted in awareness and energy flow, designed to activate your inner system and restore balance to body, mind, and spirit.
      </p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <a href="#contact" style={styles.buttonPrimary}>
          Join a Workshop
        </a>
        <a href="#chakras" style={styles.buttonSecondary}>
          Learn More
        </a>
      </div>
    </section>
  );
}

const styles = {
  buttonPrimary: {
    padding: "12px 24px",
    backgroundColor: "#FF6B6B",
    color: "white",
    borderRadius: "8px",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "0.3s",
  },
  buttonSecondary: {
    padding: "12px 24px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "#333",
    borderRadius: "8px",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "0.3s",
  },
};

export default Hero;
