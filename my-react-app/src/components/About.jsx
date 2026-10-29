
import profile from "../data/profile";

function About() {
  return (
    <section className="about section-container" id="about">
      <div className="section-heading">
        <p className="section-subtitle">Get to know me</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>
            I'm a beginner frontend developer learning React.
          </h3>

          <p>
            Hello! I'm {profile.name}, an aspiring frontend
            developer from {profile.location}. {profile.about}
          </p>

          <p>
            My journey started with HTML, CSS and JavaScript.
            I'm now learning React and building projects to
            improve my coding skills and gain practical experience.
          </p>

          <p>
            My goal is to become a skilled frontend developer
            who creates modern, responsive and user-friendly
            websites. I'm always curious and excited to learn
            something new.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">{"</>"}</div>

          <h3>Always Learning</h3>

          <p>
            Improving my skills one line of code at a time.
          </p>

          <div className="about-detail">
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>

          <div className="about-detail">
            <span>Current Focus</span>
            <strong>React Development</strong>
          </div>

          <div className="about-detail">
            <span>Goal</span>
            <strong>Frontend Developer</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
