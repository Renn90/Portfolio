import React from "react";
import emailjs from "emailjs-com";
import style from "../Styles/Email.module.scss";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Email = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [openmodal, setOpenmodal] = useState(false);

  function sendemail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7bp6ayd",
        "template_k3yy6fm",
        e.target,
        "BcfiNgeD7bey-IVWp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpenmodal(true);
          setTimeout(() => setOpenmodal(false), 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <section className={style.wrapper}>
        <span>
          <h2 data-aos="fade-up">LET'S START A CONVERSATION</h2>
        </span>
        <form className={style.mail} onSubmit={sendemail} data-aos="fade-up">
          <input placeholder="Full Name" name="name" type="text" required />
          <input
            placeholder="Email Adress"
            type="email"
            name="email"
            required
          />
          <input placeholder="Phone Number" type="text" name="number" />
          <input
            placeholder="Enter Your Message Here"
            className={style.message}
            name="message"
            type="text"
            required
          />
          <input value="SEND" type="submit" className={style.button} />
        </form>
        {openmodal && (
          <div className={style.modal}>
            <img src="../Assets/positive-vote.webp" alt='/'/>
            <h1>Message sent</h1>
            <p>Thank's for contacting me.</p>
            <div className={style.timeout} />
          </div>
        )}
      </section>
    </>
  );
};

export default Email;
