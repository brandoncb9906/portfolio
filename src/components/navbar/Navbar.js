import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-logo" to="/home">
            Welcome to my website <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-links">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-links">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
