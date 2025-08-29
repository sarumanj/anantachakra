import React from "react";

function Aboutme() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        padding: "20px",
        backgroundImage: "url('/three.jpg')", // background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)", // dark overlay
        }}
      ></div>

      {/* Content */}
      <div style={{ position: "relative", maxWidth: "700px" }}>
        {/* Circle Profile Photo */}
        <img
          src="/four.jpg" // replace with your profile photo
          alt="Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid white",
            marginBottom: "20px",
          }}
        />

        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About me</h2>
        <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
         I am Saru — a seeker, guide, and engineer of both matter and mind.<br />
         <br />
        With a Engineering background and a journey into mindfulness,<br /> I bridge the worlds of science and spirituality in my practice.<br />
        Along the way, I immersed myself in yoga and meditation, and spent six years dancing Tango, discovering the flow, rhythm, and presence of the body in motion.<br />
        My journey also took me back to my roots, trekking to ancient temples in South India, exploring sacred spaces and connecting deeply with their energy. <br />
        These experiences inspired me to develop <br />
        'DYNAMIC ENERGY ACTIVATION' <br />
        a modern practice that combines movement and breath to awaken and harmonize the energy .<br />

<p style={{ fontSize: "1.25rem", lineHeight: "1.6", color: "#ffffffff" }}>
  <span style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", color: "#9bf599dd" }}>
<br />Through Ananta Chakra, my vision is to help you explore your inner energy, awaken, balance and reconnect with the formless Self.<br />
</span>

This is an invitation to meet the consciousness in yourself and in me, to feel the harmony that arises when mind, body, and energy align.<br />
</p>
        </p>
      </div>
    </section>
  );
}

export default Aboutme;
