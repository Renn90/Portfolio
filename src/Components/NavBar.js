import React, { useEffect, useState } from "react";
import style from "../Styles/Navbar.module.scss";
import "../Styles/Globalstyle.scss";
import { Link } from "react-scroll";

const NavBar = () => {
  const [stickybar, setstickybar] = useState(false);
  const [showbar, setshowbar] = useState(false);

  const togglelist = () => {
    setshowbar((showbar) => !showbar);
  };

  useEffect(() => {
    const handlescroll = () => {
      setstickybar(window.scrollY > 200);
    };
    window.addEventListener("scroll", handlescroll);
  });

  return (
    <>
      <nav className={`${stickybar ? "sticky" : ""} ${style.navbar} slidedown`}>
        <div className={style.logo}>
          <img alt="/" src="../Assets/logo2.webp" />
        </div>
        <div>
          <div className={`${showbar ? "active" : ""} ${style.navlinks}`}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-145}
              duration={500}
              onClick={togglelist}
            >
              .Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-145}
              duration={500}
              onClick={togglelist}
            >
              .About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={togglelist}
            >
              .Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-145}
              duration={500}
              onClick={togglelist}
            >
              .Contact
            </Link>
          </div>
          <div
            className={`${showbar ? "activebar" : ""} menubar`}
            onClick={togglelist}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
