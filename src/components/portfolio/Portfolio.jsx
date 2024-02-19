import React from "react";
import "./Portfolio.css";
import DPLANIMG from "../../assets/dplan-project-image.png";
import GameProjectIMG from "../../assets/game-project-x-image.png";
import TinderCloneIMG from "../../assets/tinder-clone-project-image.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: DPLANIMG,
      title: "DPLAN",
      github: "https://github.com/mickadoos",
      demo: "https://dplan.netlify.app/",
      frontRepo: "https://github.com/mickadoos/dplan-client",
      backRepo: "https://github.com/mickadoos/dplan-server",
    },
    {
      id: 2,
      image: GameProjectIMG,
      title: "Game Project X",
      github: "https://github.com/mickadoos/game-project-x",
      demo: "https://mickadoos.github.io/game-project-x/",
    },
    {
      id: 3,
      image: TinderCloneIMG,
      title: "Tinder Clone",
      github: "https://github.com/OsAlva/PokeTinder/tree/yabel",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        {data.map(({ id, image, title, github, demo, frontRepo, backRepo }) => {
          return frontRepo && backRepo ? (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <a href={demo} target="_blank" rel="noreferrer">
                  <img src={image} alt="" />
                </a>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={frontRepo}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend Repo
                </a>
                <a
                  href={backRepo}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Backend Repo
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ) : demo ? (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
              <a href={demo} target="_blank" rel="noreferrer">
                  <img src={image} alt="" />
                </a>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ) : (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta-no-demo">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
