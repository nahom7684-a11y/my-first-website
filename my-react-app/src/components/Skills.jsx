
const skills = [
  {
    name: "HTML",
    category: "Frontend",
    level: "Learning",
    description: "Creating the structure of web pages."
  },
  {
    name: "CSS",
    category: "Frontend",
    level: "Learning",
    description: "Styling websites and building layouts."
  },
  {
    name: "JavaScript",
    category: "Programming",
    level: "Learning",
    description: "Adding interactivity to websites."
  },
  {
    name: "React",
    category: "Frontend",
    level: "Beginner",
    description: "Building reusable user interfaces."
  },
  {
    name: "Git",
    category: "Tools",
    level: "Learning",
    description: "Tracking and managing code changes."
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Learning",
    description: "Hosting and sharing coding projects."
  }
];

function Skills() {
  return (
    <section className="skills section-container" id="skills">
      <div className="section-heading">
        <p className="section-subtitle">What I'm learning</p>
        <h2>My <span>Skills</span></h2>

        <p className="skills-intro">
          Technologies and tools I'm using as I grow
          as a frontend developer.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-card-top">
              <span className="skill-category">
                {skill.category}
              </span>

              <span className="skill-level">
                {skill.level}
              </span>
            </div>

            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
