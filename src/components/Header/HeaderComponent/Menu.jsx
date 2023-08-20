import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";

// import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
// import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
// import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";

// social media
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Menu.scss";
import { Link } from "react-router-dom";
const Menu = () => {
  const handleMenuClick = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <>
      <div className="header_img">
        {" "}
        <img
          src="https://avatarfiles.alphacoders.com/319/319262.jpg"
          alt="headerImg"
          width={90}
          height={90}
        />
      </div>
      <div className="header_menu">
        <ul>
          <li>
            <HomeOutlinedIcon />
            <a href={"#home"} onClick={(e) => handleMenuClick(e, 'home')}>HOME</a>
          </li>
          <li>
            <PersonPinOutlinedIcon />
            <a href={"#myprojects"} onClick={(e) => handleMenuClick(e, 'myprojects')}>My Projects</a>
          </li>
        </ul>
      </div>
      <div className="header_icons">
        <ul>
          <li>
            <Link to={"https://twitter.com/kafaAtiyoAto"} target={"_blank"}>
              <TwitterIcon fontSize="inherit" />
            </Link>
          </li>
          <li>
            <Link
              to={"https://www.linkedin.com/in/atakan-h-28262a189/"}
              target={"_blank"}
            >
              <LinkedInIcon fontSize="inherit" />
            </Link>
          </li>
          <li>
            <Link to={"https://github.com/atakanhim"} target={"_blank"}>
              <GitHubIcon fontSize="inherit" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
