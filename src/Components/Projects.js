import React, { useEffect } from "react";
import { project } from "../data";
import style from "../Styles/Projects.module.scss";
import "aos/dist/aos.css";
import Aos from "aos";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className={style.container} id="projects">
        <h1 className={style.heading} data-aos="fade-up">
          HERE ARE A FEW PROJECTS I HAVE WORKED ON
        </h1>
        {project.map(({ title, image, description, technologies, github, view, id }) => (
          <div className={style.maped} data-aos="fade-up" key={id}>
            <a href={view} className={style.img}>
              <img src={image} alt="/" />
              <div className={style.overlay} />
            </a>
            <div className={style.info}>
              <div className={style.infoCont}>
                <h6>Featured Project</h6>
                <h1>{title}</h1>
                <p className={style.description}>{description}</p>
                <div className={style.technologies}>
                  {technologies.map((stack, index) => (
                    <p key={index}>{stack}</p>
                  ))}
                </div>
                <div className={style.links}>
                  <a href={github}>
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href={view}>
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
