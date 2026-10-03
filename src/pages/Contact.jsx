import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section id="contact" className="section contact-section">

      <div className="section-heading">

        <span className="section-number">04</span>

        <div>
          <p className="section-label">GET IN TOUCH</p>
          <h2>Contact Me</h2>
        </div>

      </div>

      <div className="contact-grid">

        <div className="contact-info">

          <h3>
            Have a project in mind?
            <span> Let's talk.</span>
          </h3>

          <p>
            I'm always interested in learning, building new projects
            and connecting with other developers.
          </p>

          <div className="contact-details">

            <a href="mailto:bhushan@example.com">
              <span className="contact-icon">✉</span>

              <div>
                <small>Email</small>
                <strong>bhushan@example.com</strong>
              </div>
            </a>

            <a href="#home">
              <span className="contact-icon">⌖</span>

              <div>
                <small>Location</small>
                <strong>Maharashtra, India</strong>
              </div>
            </a>

          </div>

          <div className="contact-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

        <div className="contact-form-wrapper">

          {submitted && (
            <div className="success-message">
              ✓ Message submitted successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="input-group">
                <label>Your Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="input-group">
              <label>Message</label>

              <textarea
                name="message"
                rows="7"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;