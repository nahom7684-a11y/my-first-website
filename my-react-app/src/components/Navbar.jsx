
import profile from "../data/profile";

function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        {profile.name}<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        type="button"
        aria-label="Toggle color theme"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
