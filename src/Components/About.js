import React, { useEffect } from "react";
import style from "../Styles/About.module.scss";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className={style.wrapper} id="about" data-aos="fade-up">
        <div className={style.heading} data-aos="fade-up">
          <h1>About Me</h1>
          <h1 className={style.bgDec}>ABOUT&nbsp;ME</h1>
          <span />
        </div>
        <div className={style.content}>
          <div className={style.text}>
            <p>
              <span>Hello</span>, my name is Faithful and i love creating things
              for the web, I started my front-end development journey in 2022
              and i have committed my time in improving my skills, My focus
              right now is on networking with people and improving my skills, i
              aim to develop into a fullstack developer in the years ahead. I
              have worked with UI/UX designers and other frontend developers to
              implement innovative designs and i have contributed to open source
              projects.
            </p>
            <p>Here are the technologies i have been working with</p>
            <ul>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-caret-right"></i>
                </span>
                HTML/CSS/SASS
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-caret-right"></i>
                </span>
                ReactJS
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-caret-right"></i>
                </span>
                Javascript
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-caret-right"></i>
                </span>
                Bootstrap/Tailwind
              </li>
            </ul>
          </div>
          <div>
            <img src="../Assets/myprt.jpg" data-aos="fade-up" alt='/'/>
            <div className={style.hove} data-aos="fade-up"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
