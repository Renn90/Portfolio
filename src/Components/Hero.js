import React from "react";
import style from "../Styles/Hero.module.scss";
import "../Styles/Globalstyle.scss";

const Hero = () => {
  return (
    <>
      <section className={style.wrapper} id="hero">
        <div className={`${style.content} slidein`}>
          <p>Hi, my&nbsp;name&nbsp;is</p>
          <h1>Faithful Chibuike</h1>
          <p className={style.headline}>
            I'm a frontend developer and I love making creative designs
          </p>
        </div>
        <div className={`${style.tagLarge} slidein`}>
          <i>&lt;body&gt;&nbsp;&lt;/body&gt;</i>
          <i>&lt;h4&gt;&nbsp;&lt;/h4&gt;</i>
        </div>
      </section>
    </>
  );
};

export default Hero;
