
const projects = [
  {
    title: "My First Website",

    description:
      "My first personal website built while learning HTML, CSS and JavaScript.",

    technologies: ["HTML", "CSS", "JavaScript"],

    github:
      "https://github.com/nahom7684-a11y/my-first-website",

    live: "#",

    status: "Completed"
  },

  {
    title: "React Portfolio",

    description:
      "My personal portfolio built with React to introduce myself and showcase my frontend development journey.",

    technologies: ["React", "JavaScript", "CSS"],

    github: "#",

    live: "#",

    status: "Currently building"
  },

  {
    title: "Future Project",

    description:
      "Another exciting project I'll build as I continue improving my frontend development skills.",

    technologies: ["React", "CSS"],

    github: "#",

    live: "#",

    status: "Coming soon"
  }
];

function Projects() {
  return (
    <section
      className="projects section-container"
      id="projects"
    >
      <div className="section-heading">
        <p className="section-subtitle">
          What I've been working on
        </p>

        <h2>
          My <span>Projects</span>
        </h2>

        <p className="skills-intro">
          A collection of projects from my frontend
          development journey.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
          >
            <div className="project-image">
              <span>{"</>"}</span>
            </div>

            <div className="project-content">
              <p className="project-status">
                {project.status}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
