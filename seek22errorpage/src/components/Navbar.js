import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { urlLinks } from "../utils/constants";
import "../styles/Navbar.css";

const { facebookURL, twitterURL, instagramURL } = urlLinks;

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img className="navbar-logo" src="seek22logo.png" alt="logo" />
        <div className="lg: visible">
          <ul className="social-media-container">
            <li className="social-media-icons">
              <a href={facebookURL} className="social-media-links">
                <FacebookOutlined style={{ fontSize: "32px" }} />
              </a>
            </li>
            <li className="social-media-icons">
              <a className="social-media-links" href={instagramURL}>
                <InstagramOutlined style={{ fontSize: "32px" }} />
              </a>
            </li>
            <li className="social-media-icons">
              <a className="social-media-links" href={twitterURL}>
                <TwitterOutlined style={{ fontSize: "32px" }} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
