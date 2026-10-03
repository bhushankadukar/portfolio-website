function About() {
  return (
    <section id="about" className="section about-section">

      <div className="section-heading">
        <span className="section-number">01</span>

        <div>
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>
      </div>

      <div className="about-grid">

        <div className="about-text">

          <h3>
            Turning ideas into
            <span> digital experiences.</span>
          </h3>

          <p>
            I'm Bhushan Kadukar, a BSc Computer Science student passionate
            about software development and modern web technologies.
          </p>

          <p>
            I enjoy creating websites and applications that are clean,
            responsive and easy to use. I am continuously improving my
            programming and problem-solving skills through practical projects.
          </p>

          <p>
            My current focus is becoming a strong full-stack developer
            by improving my knowledge of React, Java, SQL and software
            development fundamentals.
          </p>

        </div>

        <div className="about-stats">

          <div className="stat-card">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">8+</span>
            <span className="stat-label">Technologies</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">∞</span>
            <span className="stat-label">Learning</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Passion</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;