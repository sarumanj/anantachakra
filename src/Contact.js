import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v0cvdej",  
        "template_pxd33gu", 
        form.current,
        "ch4AQyGfnLrcAhuBD"    // Replace with EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        () => setStatus("❌ Failed to send. Please try again.")
      );
  };

 return (
    <section id="contact" style={styles.section}>
      <h1>Contact Me</h1>

      {/* Add your email and phone */}
      <div style={{ marginBottom: "20px", fontSize: "1.1rem", color: "#333" }}>
        <p>Email: <a href="mailto:youremail@example.com">saru.manjushri@gmail.com</a></p>
        <p>Phone: <a href="tel:+41791234567">+41 76 367 99 79</a></p>
    
      </div>
      <form ref={form} onSubmit={sendEmail} style={styles.form}>
        <label style={styles.label}>Name</label>
        <input type="text" name="from_name" placeholder="Your Name" style={styles.input} required />

        <label style={styles.label}>Email</label>
        <input type="email" name="from_email" placeholder="Your Email" style={styles.input} required />

        <label style={styles.label}>Message</label>
        <textarea name="message" placeholder="Your Message" style={styles.textarea} required></textarea>

        <button type="submit" style={styles.button}>Send</button>
      </form>

      {status && <p style={{ marginTop: "15px", fontWeight: "bold" }}>{status}</p>}
    </section>
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
  form: {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    minHeight: "100px",
  },
  button: {
    background: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Contact;
