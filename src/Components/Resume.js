import React, { useEffect } from "react";
import style from "../Styles/Resume.module.scss";
import "aos/dist/aos.css";
import Aos from "aos";

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className={style.wrapper}>
      <div data-aos="fade-up">
        <h1>DAWNLOAD MY RESUME</h1>
      </div>
      <p data-aos="fade-up">
        To learn more about my involvement & experience with frontend designs,
        dawnload my resume.
      </p>
      <button className={style.button} data-aos="fade-up"><a href="https://drive.google.com/uc?id=1cCNFor40JS_MNKgv2bYFyOF-5Qan_f4N&export=download">
        DAWNLOAD&nbsp;
        <span className={style.dawnload}>
          <i className="fa-sharp fa-solid fa-download"></i>
        </span>
      </a></button>
    </section>
  );
};

export default Resume;
