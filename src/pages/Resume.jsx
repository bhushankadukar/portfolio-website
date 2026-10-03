function Resume() {
  return (
    <section id="resume" className="resume-section">

      <div className="resume-glow"></div>

      <div className="resume-content">

        <p className="section-label">
          WANT TO KNOW MORE?
        </p>

        <h2>
          Let's take the next
          <span> step.</span>
        </h2>

        <p>
          Download my resume to learn more about my education,
          technical skills and projects.
        </p>

        <div className="resume-buttons">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            View Resume →
          </a>

          <a
            href="/resume.pdf"
            download
            className="outline-button"
          >
            Download PDF ↓
          </a>

        </div>

      </div>

    </section>
  );
}

export default Resume;