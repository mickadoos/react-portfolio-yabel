import React from "react";
import "./Skills.css";
import JavasCriptICON from "../../assets/png/js-icon.png";
import HTMLICON from "../../assets/png/html-icon.png";
import CSSICON from "../../assets/png/css-3-icon.png";
import BootstrapICON from "../../assets/png/bootstrap-icon.png";
import ReactICON from "../../assets/png/react-icon.png";
import NodeJSICON from "../../assets/png/nodejs-icon.png";
import MongoDBICON from "../../assets/png/mongodb-icon.png";
import ExpressICON from "../../assets/png/express-icon.png";
import APIICON from "../../assets/png/api-icon.png";
import PostmanICON from "../../assets/png/postman-icon.png";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <img
                src={JavasCriptICON}
                alt=""
                className="skills__details-icon"
              />
              <h4>Javascript</h4>
            </article>
            <article className="skills__details">
              <img src={HTMLICON} alt="" className="skills__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills__details">
              <img src={CSSICON} alt="" className="skills__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills__details">
              <img
                src={BootstrapICON}
                alt=""
                className="skills__details-icon"
              />
              <h4>Bootstrap</h4>
            </article>
            <article className="skills__details">
              <img src={ReactICON} alt="" className="skills__details-icon" />
              <h4>React</h4>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <img src={NodeJSICON} alt="" className="skills__details-icon" />
              <h4>NodeJS</h4>
            </article>
            <article className="skills__details">
              <img src={MongoDBICON} alt="" className="skills__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="skills__details">
              <img src={ExpressICON} alt="" className="skills__details-icon" />
              <h4>Express</h4>
            </article>
            <article className="skills__details">
              <img src={APIICON} alt="" className="skills__details-icon" />
              <h4>API Rest</h4>
            </article>
            <article className="skills__details">
              <img src={PostmanICON} alt="" className="skills__details-icon" />
              <h4>Postman</h4>
            </article>
          </div>
        </div>

        {/* END OF BACKEND */}
      </div>
    </section>
  );
};

export default Skills;
