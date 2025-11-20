import React, { useState, useRef, useEffect } from "react";
import "./NavBar.css";
import { navData } from "../../dummyData";

export default function NavBar() {
  const [openExplore, setOpenExplore] = useState(false);
  const exploreRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (exploreRef.current && !exploreRef.current.contains(e.target)) {
        setOpenExplore(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
        <div className="explore" ref={exploreRef}>
          <button
            className="nav-link explore-btn"
            onClick={() => setOpenExplore((s) => !s)}
            aria-expanded={openExplore}
          >
            Explore
            <span className={`chev ${openExplore ? "open" : ""}`}>▾</span>
          </button>

          {openExplore && (
            <ul className="explore-dropdown" role="menu">
              {navData.categories.map((cat, i) => (
                <li key={i} role="menuitem">
                  <a href="#" className="explore-item">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

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
