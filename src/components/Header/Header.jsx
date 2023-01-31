import React from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_img">
          {" "}
          <img
            src="https://sergio-react.vercel.app/static/img/about-me.jpg"
            alt="headerImg"
            width={90}
            height={90}
          />
        </div>
        <div className="header_menu">
          <ul>
            <li>
              <AccessibilityIcon />
              <a href="#home">HOME</a>
            </li>
            <li>
              <AccessibilityIcon />
              <a href="#aboutme">ABOUT ME</a>
            </li>
            <li>
              <AccessibilityIcon />
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <AccessibilityIcon />
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <AccessibilityIcon />
              <a href="#contactme">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="header_icons">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="littleHeader">
        <div className="littleHeader_img">
          {" "}
          <h1>ATAKAN</h1>
        </div>
        <div className="littleHeader_menubutton">
          <button>Menu</button>
        </div>
      </div>
    </>
  );
};

export default Header;
