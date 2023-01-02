import React, { useEffect } from "react";
import style from "../Styles/Contact.module.scss";
import "aos/dist/aos.css";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className={style.wrapper} id="contact" data-aos="fade">
        <div className={style.contact} data-aos="fade-right">
          <h1>CONTACT ME</h1>
          <p>
            I am open to new opportunities including Jobs, internships and
            collaborations.
          </p>
          <div className={style.tags}>
            <span>
              <i className="fa-sharp fa-solid fa-location-dot"></i>
              <h4>Phone</h4>
            </span>
            <p>+234 812 245 9090</p>
            <p>+234 915 552 1198</p>
          </div>
          <div className={style.tags}>
            <span>
              <i className="fa-sharp fa-solid fa-envelope"></i>
              <h4>Email</h4>
            </span>
            <p>faithfulokondu@ gmail.com</p>
          </div>
        </div>
        <div className={style.image} data-aos="fade-left">
          <img src="../Assets/contact.webp" alt="/" />
        </div>
      </section>
    </>
  );
};

export default Contact;
