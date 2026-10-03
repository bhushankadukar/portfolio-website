function Home() {
  return (
    <section id="home" className="hero">

      <div className="hero-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
      </div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="available">
            <span className="available-dot"></span>
            Available for opportunities
          </div>

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Bhushan
            <span> Kadukar</span>
          </h1>

          <h2>
            Full-Stack Developer
            <br />
            <span>& Web Creator</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications
            using React, JavaScript, Java and SQL.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Work
              <span>→</span>
            </a>

            <a href="/resume.pdf" className="outline-button" download>
              Download CV
              <span>↓</span>
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <span>•</span>

            <a href="#contact">
              Email
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="profile-card">

            <div className="card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="profile-image-wrapper">

              <div className="profile-ring"></div>

              <img
                src="/profile.jpg"
                alt=".........................Bhushan Kadukar"
                loading="lazy"
              />

            </div>

            <div className="code-decoration">
              <span>&lt;</span>
              <span>/&gt;</span>
            </div>

          </div>

          <div className="floating-card floating-one">
            <span>⚡</span>
            <div>
              <strong>React</strong>
              <small>Developer</small>
            </div>
          </div>

          <div className="floating-card floating-two">
            <span>☕</span>
            <div>
              <strong>Java</strong>
              <small>Learning</small>
            </div>
          </div>

        </div>

      </div>

      <a href="#about" className="scroll-down">
        <span>Scroll to explore</span>
        <span>↓</span>
      </a>

    </section>
  );
}

export default Home;