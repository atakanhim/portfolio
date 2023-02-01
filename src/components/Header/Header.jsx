import React, { useState } from "react";
import "./Header.scss";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

import Menu from "./HeaderComponent/Menu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    console.log(showMenu);
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="menu">
        <Menu />
      </div>
      <div className="littleHeader">
        <div className="littleHeader_img">
          {" "}
          <h1>ATAKAN</h1>
        </div>

        <div className="btn" onClick={() => handleMenu()}>
          Menu{" "}
        </div>
      </div>

      <div className={`menu absolutemenu ${showMenu ? "open" : ""}`}>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </>
  );
};

export default Header;
