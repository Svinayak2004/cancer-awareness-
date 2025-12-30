import { useState } from "react";

function Contact() {
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // important: prevent page reload
    setSuccess("Your message has been sent successfully!");
    e.target.reset(); // reset the form

    // Hide success message after 3 seconds
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <section className="contact">
      <span className="section-tag">GET IN TOUCH</span>
      <h2>Contact Us</h2>
      <p className="contact-subtitle">
        Have questions or want to get involved? We'd love to hear from you.
      </p>

      {success && (
        <p style={{ color: "#2563eb", fontWeight: "600", marginBottom: "16px" }}>
          {success}
        </p>
      )}

      <form className="contact-card" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" required />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="your@email.com" required />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea placeholder="How can we help you?" rows="4" required></textarea>
        </div>

        <button type="submit" className="send-btn">
          ✈️ Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;