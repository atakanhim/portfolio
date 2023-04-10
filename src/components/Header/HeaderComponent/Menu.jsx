import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";

// social media
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Menu.scss";
import { Link } from "react-router-dom";
const Menu = () => {
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
            <Link to={"#home"}>HOME</Link>
          </li>
          <li>
            <PersonPinOutlinedIcon />
            <Link to={"#aboutme"}>ABOUT ME</Link>
          </li>
          <li>
            <WorkspacesOutlinedIcon />
            <Link to={"#services"}>SERVICES</Link>
          </li>
          <li>
            <PortraitOutlinedIcon />
            <Link to={"#portfolio"}>PORTFOLIO</Link>
          </li>
          <li>
            <ContactMailOutlinedIcon />
            <Link to={"#contact"}>CONTACT ME</Link>
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
