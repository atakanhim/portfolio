import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import "./Menu.scss";
const Menu = () => {
  return (
    <>
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
            <HomeOutlinedIcon />
            <a href="#home">HOME</a>
          </li>
          <li>
            <PersonPinOutlinedIcon />
            <a href="#aboutme">ABOUT ME</a>
          </li>
          <li>
            <WorkspacesOutlinedIcon />
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <PortraitOutlinedIcon />
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <ContactMailOutlinedIcon />
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
    </>
  );
};

export default Menu;
