import React from "react";

function Chakras() {
  const chakras = [
    {
      title: "Step into Your Energy Centers",
      text: "In reality, your physical body is the product of your chakras — the subtle energy centers that shape your body, mind, and consciousness. Did you know there are 114 chakras in the human body? For simplicity, the 7 major chakras along your spine are the most widely known, while the other 107 subtle centers are spread throughout your body. These chakras are like wheels or vortexes of energy, psychic nodes that guide the flow of your inner system.You cannot see this energy flow — just like the electric charge flowing through a coil is invisible, yet when it powers a lamp, we see the light. Similarly, our energy centers vibrate subtly, guiding our thoughts, actions, and life experiences. The effects are visible in your daily life, even if the flow itself remains unseen.Your consciousness is intimately linked with these energy centers. Each chakra is a doorway where awareness meets subtle energy, shaping how you feel, think, and interact with the world. Once you begin to activate and harmonize them, you will start to feel their presence and effects.Are you ready to feel it?",
      image: "/chakra1.jpg",
    },
    {
      title: "Mūlādhāra – The Root Energy Point",
      text: "At the base of your spine lies the root energy point, the foundation of your inner system. It is the starting vibration that allows consciousness to take form in the body. Its deep red frequency reflects stability, grounding, and the instinct for life. When this point is balanced, you feel secure, steady, and supported by the world around you.",
      image: "/chakra2.jpg",
    },
    {
      title: "Svādhiṣṭhāna – Sacral Energy Point",
      text: "Just below the navel is the sacral energy point, the center of flow and creation. Its orange vibration carries warmth, movement, and expansion — like water that adapts to every shape. This point governs emotions, creativity, and relationships. When harmonized, it brings joy, openness, and the ability to connect freely with life and others.",
      image: "/chakra3.jpg",
    },
    {
      title: "Maṇipūra – Solar Energy Point",
      text: "At the level of the navel shines the solar energy point, your inner fire. Its yellow vibration is bright and powerful, like the sun that fuels all growth. This center governs willpower, clarity, and self-confidence. When it is balanced, you feel strong, motivated, and able to act with direction.",
      image: "/chakra4.jpg",
    },
    {
      title: "Anāhata – Heart Energy Point",
      text: "In the middle of your chest rests the heart energy point, where love and compassion awaken. Its green vibration represents balance, healing, and growth, much like nature itself. Here energy becomes softer, opening you to kindness and connection. In harmony, it allows you to give and receive love freely, creating deep harmony within yourself and with others.",
      image: "/chakra5.jpg",
    },
    {
      title: "Viśuddha – Throat Energy Point",
      text: "At the throat is the energy point of expression and truth. Its blue vibration reflects clarity, openness, and the courage to let your voice flow. This center governs communication and creativity through sound. When balanced, it allows you to speak clearly, listen deeply, and live authentically.",
      image: "/chakra6.jpg",
    },
    {
      title: "Ājñā – Brow Energy Point",
      text: "Between the eyebrows lies the brow energy point, often called the seat of insight. Its indigo vibration resonates with inner vision, intuition, and wisdom. Like a clear night sky, it opens your awareness beyond the surface. When harmonized, it brings focus, understanding, and the ability to see life from a higher perspective.",
      image: "/chakra7.jpg",
    },
    {
      title: "Sahasrāra – Crown Energy Point",
      text: "At the top of the head is the crown energy point, the gateway to higher consciousness. Its violet or white vibration symbolizes purity, expansion, and the connection to the infinite. When awakened, it brings a deep sense of unity, inner peace, and the realization that you are part of something greater than yourself.",
      image: "/chakra8.jpg",
    },
    {
      title: "My Practice: Dynamic Energy Activation",
      text: "This is not a standard or commercial method — it is a personal journey. Each person carries unique patterns of energy, and what you need may be different from the next. In our practice, we first connect with where you are right now: your body, your emotions, and your state of mind. From there, we focus on the energy point that calls for balance — whether grounding, creativity, expression, or inner stillness.Through movement, breath, sound, and awareness, we activate that center, allowing energy to flow naturally. The process is dynamic, alive, and intuitive — guided not by rigid steps, but by your own inner needs. My role is simply to support you in discovering the harmony that is already within.",
      image: "/chakra9.jpg",
    },
     {
      title: "When Energy Aligns",
      text: "🌿 Reduce Stress & Anxiety – release tension from body and mind 🔥 Boost Energy & Vitality – awaken your natural inner power 🎯 Sharpen Focus & Creativity – clear the mind for new ideas 💓 Balance Emotions – feel more grounded and centered 🌌 Deepen Inner Connection – experience the harmony of body, mind, and consciousness",
      image: "/chakra10.jpg",
    },
  ];

  return (
    <section
      id="chakras"
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        backgroundImage: "url('/your-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          textAlign: "center",
          textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
        }}
      >
        The Dynamics of Consciousness & Energy
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {chakras.map((chakra, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column", // stack image and text on mobile
              alignItems: "center",
              gap: "20px",
              background: "rgba(0, 0, 0, 0.5)", // semi-transparent overlay
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={chakra.image}
              alt={chakra.title}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <div>
              <h3 style={{ marginBottom: "10px", color: "#fff" }}>
                {chakra.title}
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#eee" }}>
                {chakra.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chakras;