import React, { useState } from 'react'
import { Link } from "react-router-dom"
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import batman from "../batman.jpg"
import harley from "../harley.jpg"
import trio from "../trioque.jpg"
import wonderwoman from "../wonderwoman.jpg"
import english from "../english.png"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CountriesApp from "../CountriesApp.mp4"
import GameHub from "../GameHub.mp4"
import JavaScript from "../JavaScript.png"
import CSS from "../CSS.png"
import HTML from "../HTML.svg"
import nodeJS from "../nodeJS.webp"
import ReactIcon from "../React.jpg"
import ReduxIcon from "../ReduxIcon.png"
import Postgres from "../Postgres.png"
import SequelizeIcon from "../SequelizeIcon.svg"
import MongoIcon from "../Mongo.png"
import JSONWebTokenIcon from "../JSONWebToken.png"
import SQLiteIcon from "../SQLite.png"
import CommonJSIcon from "../CommonJS.png"
import ES6 from "../ES6.png"
import GitBashIcon from "../GitBashIcon.png"
import RouterIcon from "../RouterIcon.png"
import GitHubIcon from "../GitHubIcon.webp"
import LinkedinIcon from "../LinkedinIcon.png"
import EmailIcon from "../EmailIcon.png"
import PDFIcon from "../PDFIcon.jpg"


export default function ComicBook() {

  const [bImg, setbImg] = useState(`${trio}`)
  const [copied, setCopied] = useState(false)
  const [project, setProject] = useState(1)

  const checkerAboutMe = () => {
    document.getElementById("c1").checked = false
    document.getElementById("c2").checked = false
    document.getElementById("c3").checked = false
    document.getElementById("c4").checked = false
    setbImg(`${trio}`)
  }

  const checkerTechnologies = () => {
    document.getElementById("c1").checked = true
    document.getElementById("c2").checked = false
    document.getElementById("c3").checked = false
    document.getElementById("c4").checked = false
    setbImg(`${batman}`)
  }

  const checkerProjects = () => {
    document.getElementById("c1").checked = true
    document.getElementById("c2").checked = true
    document.getElementById("c3").checked = false
    document.getElementById("c4").checked = false
    setbImg(`${harley}`)
  }

  const checkerContactMe = () => {
    document.getElementById("c1").checked = true
    document.getElementById("c2").checked = true
    document.getElementById("c3").checked = true
    document.getElementById("c4").checked = false
    setbImg(`${wonderwoman}`)
  }



  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <img className="bImg" src={bImg} />
      <div className="myBarPositioning">
        <div className="markersPositioning">
          <Link to="/"><div className="myBar" style={{ backgroundImage: `url(${english})`, backgroundSize: "100%", backgroundPosition: "center" }}>Go back</div></Link>
          <Link to="#"><div className="myBar" style={{ backgroundImage: `url(${trio})`, backgroundSize: "100%", backgroundPosition: "center" }} onClick={checkerAboutMe}>About Me</div></Link>
          <Link to="#"><div className="myBar" style={{ backgroundImage: `url(${batman})`, backgroundSize: "100%", backgroundPosition: "center" }} onClick={checkerTechnologies}>Technologies</div></Link>
          <Link to="#"><div className="myBar" style={{ backgroundImage: `url(${harley})`, backgroundSize: "100%", backgroundPosition: "center" }} onClick={checkerProjects}>Projects</div></Link>
          <Link to="#"><div className="myBar" style={{ backgroundImage: `url(${wonderwoman})`, backgroundSize: "100%", backgroundPosition: "center" }} onClick={checkerContactMe}>Contact Me</div></Link>
        </div>
      </div>
      <div className="book">
        <input type="checkbox" id="c1" />
        <input type="checkbox" id="c2" />
        <input type="checkbox" id="c3" />
        <input type="checkbox" id="c4" />
        <div id="cover">
          <img src={bImg} />
        </div>
        <div className="flip-book">
          <div className="flip" id="p1">
            <div className="back">
              <img src={bImg} />
              <label className="back-btn" for="c1" onClick={() => setbImg(`${trio}`)}><UndoIcon style={{color:"black"}}/>Flip to the previous page </label>
            </div>
            <div className="front">
              <h2>About Me</h2>
              <p>My name is Rodrigo Moriconi, and I´m an Argentine Full Stack Web Developer. I got into programming on february 2022, and later on I graduated at Henry's on August. I come with a large set of skills that benefit me when I'm coding / being creative, but also when leading a group. My best qualities are leadership, resilience, creativity and decisiveness. </p>
              <label className="next-btn" for="c1" onClick={() => setTimeout(() => { setbImg(`${batman}`) }, 200)}>Flip to the next page <RedoIcon style={{color:"black"}}/></label>
            </div>
          </div>
          <div className="flip" id="p2">
            <div className="back">
              <img src={bImg} />
              <label className="back-btn" for="c2" onClick={() => setbImg(`${batman}`)}><UndoIcon style={{color:"black"}}/>Flip to the previous page </label>
            </div>
            <div className="front">
              <h2>Technologies</h2>
              <div className="techContainer">
                <div className="techEach">
                  <img className="techImg" src={JavaScript} />
                  <h3>JavaScript</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={CSS} />
                  <h3>CSS</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={HTML} />
                  <h3>HTML</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={nodeJS} />
                  <h3>Node.Js</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={ReactIcon} />
                  <h3>React</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={ReduxIcon} />
                  <h3>Redux</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={Postgres} />
                  <h3>PostreSQL</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={SequelizeIcon} />
                  <h3>Sequelize</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={MongoIcon} />
                  <h3>MongoDB</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={JSONWebTokenIcon} />
                  <h3>JWT</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={SQLiteIcon} />
                  <h3>SQLite</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={CommonJSIcon} />
                  <h3>CommonJS</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={ES6} />
                  <h3>ES6</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={GitBashIcon} />
                  <h3>Git</h3>
                </div>
                <div className="techEach">
                  <img className="techImg" src={RouterIcon} />
                  <h3>Router</h3>
                </div>
              </div>
              <label className="backBtnFront" for="c1" onClick={() => setbImg(`${harley}`)}><UndoIcon style={{color:"black"}}/>Flip to the previous page </label>
              <label className="next-btn" for="c2" onClick={() => setTimeout(() => { setbImg(`${harley}`) }, 200)}>Flip to the next page <RedoIcon style={{color:"black"}}/></label>
            </div>
          </div>
          <div className="flip" id="p3">
            <div className="back">
              <img src={bImg} />
              <label className="back-btn" for="c3" onClick={() => setbImg(`${harley}`)}><UndoIcon style={{color:"black"}}/>Flip to the previous page </label>
            </div>
            <div className="front">
              {
                project === 1 ? 
                <div style={project === 1 && {animationName: "appear"}} className="projectsPositioning">
                <h2>Countries App</h2>
                <video style={{borderRadius: "10px"}} key={CountriesApp} className="videoIO" controls>
                  <source src={CountriesApp} type="video/mp4" />
                </video>
                <p className="frontText">Countries App was an individual project I made during my time at Henry's. There, you can find information about every country in the whole world, and add popular activities to them. Links below:</p>
                <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"center"}}>
                <div className="projectBtnPositioning">
                  <button className="projectBtn">
                    <a className="projectLink" target="_blank" href="https://countries-pi-picoways-client.vercel.app/">Link to page</a>
                  </button>
                  <button className="projectBtn">
                    <a className="projectLink" target="_blank" href="https://github.com/Picoways/Countries-PI---Picoways">GitHub repository</a>
                  </button>
                </div>
                <button className="projectBtn">
                  <p className="projectLink" onClick={() => setProject(2)}>Next project</p>
                </button>
                </div>
              </div>
              :
              project === 2 &&
              <div style={project === 2 && {animationName: "appear2"}} className="projectsPositioning2">
                <h2>GameHub E-Commerce</h2>
                <video style={{borderRadius: "10px"}} key={GameHub} width="430" height="240" controls>
                  <source src={GameHub} type="video/mp4" />
                </video>
                <p className="frontText">GameHub E-Commerce was a group project I made along with 7 members during my time at Henry's. It has both an admin and an user interface, with their own respective functionalities. Links below:</p>
                <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"center"}}>
                <div className="projectBtnPositioning">
                  <button className="projectBtn">
                    <a className="projectLink" target="_blank" href="https://gamehub-chi.vercel.app/">Link to page</a>
                  </button>
                  <button className="projectBtn">
                    <a className="projectLink" target="_blank" href="https://github.com/Picoways/GameHubDeploy">GitHub repository</a>
                  </button>
                </div>
                <button className="projectBtn">
                  <p className="projectLink" onClick={() => setProject(1)}>Previous project</p>
                </button>
                </div>
              </div>
              }
              <label className="backBtnFront" for="c2" onClick={() => setbImg(`${harley}`)}><UndoIcon style={{color:"black"}}/>Flip to the previous page </label>
              <label className="next-btn" for="c3" onClick={() => setTimeout(() => { setbImg(`${wonderwoman}`) }, 200)}>Flip to the next page <RedoIcon style={{color:"black"}} /></label>
            </div>
          </div>
          <div className="flip" id="p4">
            <div className="back">
              <img src={bImg} />
              <label className="back-btn" for="c4" onClick={() => setbImg(`${harley}`)}><UndoIcon style={{color:"black"}}/> Flip to the previous page </label>
            </div>
            <div className="front">
              <h2>Contact me!</h2>
              <p>I'm always looking for job oportunities and to start new projects. Do not hesitate to contact me if you're interested. Socials below:</p>
              <div className="contactInfoContainer">
                <div className="contactPositioning">
                  <a className="contactRedirect" onClick={() => { navigator.clipboard.writeText("picoways@gmail.com"); setCopied(true) }}>
                    <img className="contactImg" src={EmailIcon} />picoways@gmail.com <ContentCopyIcon />
                  </a>
                  {
                    copied === true ?
                      <h4 className="copiedText">Copied to clipboard!</h4>
                      :
                      <h4 className="transparentText">Copied to clipboard!</h4>
                  }
                </div>
                <div className="contactPositioning">
                  <a className="contactRedirect" target="_blank" href="https://www.linkedin.com/in/rodrigo-moriconi-25b765244/">
                    <img className="contactImg" src={LinkedinIcon} />My Linkedin
                  </a>
                </div>
                <div className="contactPositioning">
                  <a className="contactRedirect" target="_blank" href="https://github.com/Picoways">
                    <img className="contactImg" src={GitHubIcon} />My GitHub
                  </a>
                </div>
                <div className="contactPositioning">
                  <a className="contactRedirect" target="_blank" href="https://export-download.canva.com/lA4s8/DAFKf6lA4s8/9/0-33839455116.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20220826%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220826T133510Z&X-Amz-Expires=69303&X-Amz-Signature=1424c9ed837851f35b08ba82b7dd9658a3dd276f73927d76d6b2dfdf7b576db3&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Rodrigo%2520Moriconi%2520Resume.pdf&response-expires=Sat%2C%2027%20Aug%202022%2008%3A50%3A13%20GMT">
                    <img className="contactImg" src={PDFIcon} />My Resume
                  </a>
                </div>
              </div>
              <label className="backBtnFront" for="c3" onClick={() => setbImg(`${harley}`)}><UndoIcon style={{color:"black"}}/>Flip to the previous page </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

