
import profile from "../data/profile";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">
          {profile.greeting}
        </p>

        <h1>
          {profile.name}<span>.</span>
        </h1>

        <h2>{profile.role}</h2>

        <p className="hero-description">
          {profile.introduction}
        </p>

        <p className="hero-availability">
          <span className="status-dot"></span>
          {profile.availability}
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-decoration">
          <span>&lt;/&gt;</span>
        </div>

        <div className="hero-initial">
          {profile.name.charAt(0)}
        </div>

        <p>Building my future, one project at a time.</p>
      </div>
    </section>
  );
}

export default Hero;
