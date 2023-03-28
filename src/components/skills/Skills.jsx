// 13.0 create skills component .jsx and .css and copy the experience component and change the name
import React from 'react'
import './Skills.css'
// import './Skills2.css'
// import { BsFillPatchCheckFill } from "react-icons/bs";
import JavasCriptICON from '../../assets/png/js-icon.png'
import HTMLICON from '../../assets/png/html-icon.png'
import CSSICON from '../../assets/png/css-3-icon.png'
import BootstrapICON from '../../assets/png/bootstrap-icon.png'
import ReactICON from '../../assets/png/react-icon.png'
import NodeJSICON from '../../assets/png/nodejs-icon.png'
import MongoDBICON from '../../assets/png/mongodb-icon.png'
import ExpressICON from '../../assets/png/express-icon.png'
import APIICON from '../../assets/png/api-icon.png'
import PostmanICON from '../../assets/png/postman-icon.png'




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
              {/* <BsFillPatchCheckFill className="skills__details-icon" /> */}
              <img src={JavasCriptICON} alt="" className="skills__details-icon"/>
                <h4>Javascript</h4>
              {/* <div>
                <small className="text-light">skillsd</small>
              </div> */}
            </article>
            <article className="skills__details">
              {/* <BsFillPatchCheckFill className="skills__details-icon" /> */}
              <img src={HTMLICON} alt="" className="skills__details-icon"/>
                <h4>HTML</h4>
              {/* <div>
                <small className="text-light">skillsd</small>
              </div> */}
            </article><article className="skills__details">
              {/* <BsFillPatchCheckFill className="skills__details-icon" /> */}
              <img src={CSSICON} alt="" className="skills__details-icon"/>
                <h4>CSS</h4>
              {/* <div>
                <small className="text-light">skillsd</small>
              </div> */}
            </article>
            <article className="skills__details">
              {/* <BsFillPatchCheckFill className="skills__details-icon" /> */}
              <img src={BootstrapICON} alt="" className="skills__details-icon"/>
                <h4>Bootstrap</h4>
              {/* <div>
                <small className="text-light">skillsd</small>
              </div> */}
            </article>
            <article className="skills__details">
              {/* <BsFillPatchCheckFill className="skills__details-icon" /> */}
              <img src={ReactICON} alt="" className="skills__details-icon"/>
                <h4>React</h4>
              {/* <div>
                <small className="text-light">skillsd</small>
              </div> */}
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
          <article className="skills__details">
              {/* <BsFillPatchCheckFill className="skills__details-icon" /> */}
              <img src={NodeJSICON} alt="" className="skills__details-icon"/>
                <h4>NodeJS</h4>
              {/* <div>
                <small className="text-light">skillsd</small>
              </div> */}
            </article>
            <article className="skills__details">
              {/* <BsFillPatchCheckFill className="skills__details-icon" /> */}
              <img src={MongoDBICON} alt="" className="skills__details-icon"/>
                <h4>MongoDB</h4>
              {/* <div>
                <small className="text-light">skillsd</small>
              </div> */}
            </article>
            <article className="skills__details">
              {/* <BsFillPatchCheckFill className="skills__details-icon" /> */}
              <img src={ExpressICON} alt="" className="skills__details-icon"/>
                <h4>Express</h4>
              {/* <div>
                <small className="text-light">skillsd</small>
              </div> */}
            </article>
            <article className="skills__details">
              {/* <BsFillPatchCheckFill className="skills__details-icon" /> */}
              <img src={APIICON} alt="" className="skills__details-icon"/>
                <h4>API Rest</h4>
              {/* <div>
                <small className="text-light">skillsd</small>
              </div> */}
            </article>
            <article className="skills__details">
              {/* <BsFillPatchCheckFill className="skills__details-icon" /> */}
              <img src={PostmanICON} alt="" className="skills__details-icon"/>
                <h4>Postman</h4>
              {/* <div>
                <small className="text-light">skillsd</small>
              </div> */}
            </article>
          </div>


          
        </div>

        {/* END OF BACKEND */}

        
      </div>
    </section>
  )
}

export default Skills