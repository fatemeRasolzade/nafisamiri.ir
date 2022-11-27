import React from "react";
// import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <TwitterIcon /> */}
        <a
            className="social"
            href="https://www.linkedin.com/in/nafiseamiri/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
      </div>
      <p> &copy; 2022 NafisAmiri.ir</p>
    </div>
  );
}

export default Footer;