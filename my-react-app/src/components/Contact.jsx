
import profile from "../data/profile";

function Contact() {
  return (
    <section className="contact section-container" id="contact">
      <div className="section-heading">
        <p className="section-subtitle">Let's connect</p>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className="contact-content">
        <h3>Have a question or want to work together?</h3>

        <p>
          I'm always happy to connect, learn from others
          and hear about interesting opportunities.
        </p>

        <a
          className="btn btn-primary contact-button"
          href={`mailto:${profile.email}`}
        >
          Send Me an Email
        </a>

        <p className="contact-email">
          {profile.email}
        </p>
      </div>
    </section>
  );
}

export default Contact;
