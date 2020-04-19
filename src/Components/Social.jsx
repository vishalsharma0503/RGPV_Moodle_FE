import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInternetExplorer,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

export default function Social() {
  return (
    <div className="social-container">
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
        <FontAwesomeIcon icon={faInternetExplorer} size="2x" />
      </a>
    </div>
  );
}
