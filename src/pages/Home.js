import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import me from "../assets/me.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="nafis-img-container">
          <img src={me} style={{ width: " 250px", borderRadius: "30px" }} alt="nafis" />
        </div>
        <h2> Hi, My Name is Nafis</h2>
        <div className="prompt">
          <p>A software developer with a strong passion for Human Computer Interaction.</p>
          <a className="social" rel="noreferrer" href="https://www.linkedin.com/in/nafiseamiri/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/nafisamiri" rel="noreferrer" target="_blank" className="social">
            <GithubIcon />
          </a>
          <a href="mailto:nafiseamiriemami@gmail.com" rel="noreferrer">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, Redux, HTML5, CSS3, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents, SocketConnection, Jest.</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>JavaScript, Python, CI/CD, MySQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C#, C++ </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
