import React, { useState } from "react";
import style from "../Styles/Sidebar.module.scss";
import "../Styles/Globalstyle.scss";

const Sidebar = () => {
  const [showbar, setshowbar] = useState(true);

  const handlebar = () => {
    if (window.innerWidth > 1500) {
      setshowbar(false);
    } else {
      setshowbar(true);
    }
  };

  window.addEventListener("resize", handlebar);

  return (
    <>
      <div
        className={`${style.wrapper} slideleft`}
        style={{ display: `${showbar ? "" : "none"}` }}
      >
        <ul>
          <li>
            <a href="https://twitter.com/Renny900?t=yxe5HabwfhrrZJGVb8hJHw&s=03">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/faithful-chibuike-6b5b90244">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Renn90">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
