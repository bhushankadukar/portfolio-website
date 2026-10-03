function Skills() {

  const skills = [
    {
      name: "HTML5",
      category: "Frontend",
      icon: "🌐"
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: "🎨"
    },
    {
      name: "JavaScript",
      category: "Programming",
      icon: "JS"
    },
    {
      name: "React.js",
      category: "Frontend",
      icon: "⚛"
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      icon: "B"
    },
    {
      name: "Java",
      category: "Programming",
      icon: "☕"
    },
    {
      name: "SQL",
      category: "Database",
      icon: "DB"
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      icon: "⌘"
    }
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-heading">
        <span className="section-number">02</span>

        <div>
          <p className="section-label">WHAT I WORK WITH</p>
          <h2>My Skills</h2>
        </div>
      </div>

      <div className="skills-intro">
        <p>
          Technologies and tools I use to create modern web applications.
        </p>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <div>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>

            <span className="skill-arrow">↗</span>

          </div>
        ))}

      </div>

      <div className="tech-line">
        <span>Currently learning:</span>
        <strong>Advanced Java</strong>
        <strong>SQL</strong>
        <strong>Problem Solving</strong>
      </div>

    </section>
  );
}

export default Skills;