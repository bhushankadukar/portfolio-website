function Projects() {

  const projects = [
    {
      number: "01",
      title: "Shopkart",
      category: "React E-Commerce",
      description:
        "A responsive e-commerce application built with React featuring product browsing, cart functionality and modern UI.",
      image: "/images/shopkart.jpg",
      technologies: ["React", "JavaScript", "CSS"]
    },

    {
      number: "02",
      title: "BiteBox : food website",
      category: "React Application",
      description:
        "A food management application where users can add, view and delete , add foods dishes using React Hook Form.",
      image: "/images/recipe.jpg",
      technologies: ["React", "React Hook Form", "CSS"]
    },

    {
      number: "03",
      title: "Developer Portfolio",
      category: "Personal Website",
      description:
        "A responsive portfolio website designed to showcase skills, projects, resume and contact information.",
      image: "/images/portfolio.jpg",
      technologies: ["React", "Vite", "CSS"]
    }
  ];

  return (
    <section id="projects" className="section projects-section">

      <div className="section-heading">
        <span className="section-number">03</span>

        <div>
          <p className="section-label">SELECTED WORK</p>
          <h2>My Projects</h2>
        </div>
      </div>

      <div className="projects-intro">
        <p>
          A collection of projects I've built while learning and
          developing my skills.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-overlay">
                <span>View Project →</span>
              </div>

            </div>

            <div className="project-body">

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">

                {project.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;