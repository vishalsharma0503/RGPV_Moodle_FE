import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTumblr,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

export default function Social() {
  return (
    <div className="social-container" style={{display:"flex", textAlign:"right", justifyContent:"flex-end"}}>
      <a
        href="http://linkedin.com/in/mitrasonu/"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/LinuxBhopal/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="http://iteindia.in/" className="youtube social">
        <FontAwesomeIcon icon={faTumblr} size="2x" />
      </a>
    </div>
  );
}
