import React from "react";

function Chakraone() {
  return (
    <section
      id="chakraone"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/two.jpg')", // your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "white",
        padding: "40px 20px",
        position: "relative",
      }}
    >
      {/* Overlay for better text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      ></div>

      {/* Text content */}
      <div style={{ zIndex: 2, maxWidth: "900px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
          Why to Awaken the Consiousness?
        </h2>
         <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
        <span style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", color: "#f2eeeeff" }}>
          “The senses are drawn to the changing forms of the world, but beyond
          them lies the unchanging Self.” — Bhagavad Gita
          </span>
          <br />
          <br />
          <p style={{ fontSize: "1.25rem", lineHeight: "1.6" }}></p>
          Our senses perceive the world of shapes, sounds, and movement. 
          Yet, when we turn inward and let go of these outer impressions,
           we encounter our formless nature — the subtle field of energy within.
          <br />
          <br />
          This energy expresses itself through chakras, the vital centers of
          consciousness. When these centers are awakened and harmonized, life
          begins to unfold with clarity, vitality, and inner peace.
          <br />
          <br />
          Energy Activation is not only about calming the mind — it is about
          remembering who we are beyond form.
          <br />
          <br />
          <p style={{ fontSize: "1.5rem", lineHeight: "1.2" }}>
            <span style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", color: "#f2eeeeff" }}>
          “When the senses rest from form,
          <br />
          the formless Self shines within.
          <br />
          Awaken the energy centers,
          <br />
          and life unfolds in harmony.” – Saru
          </span>
          </p>
        </p>
      </div>
    </section>
  );
}

export default Chakraone;

