// 14.0 copy paste the portfolio component (look tut)
// 3.0 create all components folders with .jsx file and .css --- then on .jsx file type racfe, press tab and import the .css file 
import React from "react";
import "./Portfolio.css";
// import "./Portfolio2.css";
import DPLANIMG from "../../assets/dplan-project-image.png";
import GameProjectIMG from '../../assets/game-project-x-image.png';

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: DPLANIMG,
      title: 'DPLAN',
      github: 'https://github.com/mickadoos',
      demo: 'https://famous-brioche-240d75.netlify.app/',
      frontRepo:'https://github.com/PmplCode/DPlan-front', 
      backRepo:'https://github.com/PmplCode/DPlan-back', 
    },
    {
      id: 2,
      image: GameProjectIMG,
      title: 'Game Project X',
      github: 'https://github.com/mickadoos/game-project-x',
      demo: 'https://mickadoos.github.io/game-project-x/'
    }
  ]

  return (
    // 10.2 chanmge all components to a section parent container with his correspondent id
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <container className="portfolio__container">
        {
          data.map(({id, image, title, github, demo, frontRepo, backRepo}) => {
            return (
              (frontRepo && backRepo) ? 
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="" />
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
        </article> :
        
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="" />
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
        
        
         
            )
          })
        }
      </container>
    </section>
  );
};

export default Portfolio;
