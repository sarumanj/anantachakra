import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Chakraone from "./Chakraone";
import Aboutme from "./Aboutme";  // ✅ new import
import Chakras from "./Chakras";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />  {/* Hero section */}
      <Chakraone />
      <Aboutme />
      <Chakras /> 

      <section id="chakras" style={styles.section}>
        <h1>My Philosophy</h1>
        <p>Each of us lives in a world shaped not only by reality but by our perception of it — a subjective world created through consciousness. From childhood, we inherit ways of seeing, acting, and believing, often without questioning them. Influences from family, culture, and society quietly weave themselves into the fabric of our inner world.<br />

<br />But how conscious are we of this world we have built? <br />How much of what we think, feel, and choose is truly ours — and how much is borrowed?<br />

<br />For me, practice is a way of pausing this automatic flow, of turning inward to see the structures of the mind and the vibrations of the energy points that sustain it. When we explore these inner centers, we begin to notice: some patterns fall away, others transform, and a deeper clarity emerges.<br />

<br />This journey is not about rejecting the world outside, but about discovering a more conscious relationship with the world within — one that brings freedom, alignment, and authenticity to how we live. </p>

      </section>

      <Contact />
    </div>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    padding: "40px",
    background: "#f8f8f8",
    borderBottom: "1px solid #ccc",
    textAlign: "center",
  },
};

export default App;
