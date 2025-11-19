import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#" className="logo-link">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy Logo"
            className="logo-image"
          />
        </a>
      </div>

      <div className="nav-center">
        <a href="#" className="nav-link">
          Explore
        </a>

        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search for anything" />
        </div>
      </div>

      <div className="nav-right">
        <a href="#" className="nav-link">
          Plans & Pricing
        </a>
        <a href="#" className="nav-link">
          Udemy Business
        </a>
        <a href="#" className="nav-link">
          Teach on Udemy
        </a>

        <button className="icon-btn">🛒</button>

        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>

        <button className="icon-btn">🌐</button>
      </div>
    </nav>
  );
}
