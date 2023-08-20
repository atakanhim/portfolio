import React, { useState } from "react";
import "./Header.scss";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import Menu from "./HeaderComponent/Menu";

import {  createTheme, ThemeProvider } from "@mui/material/styles";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    console.log(showMenu);
    setShowMenu(!showMenu);
  };

  const theme = createTheme({
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 1505,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
    },
  });

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
          <ThemeProvider theme={theme}>
            {showMenu ? (
              <MenuOpenOutlinedIcon
                sx={[
                  {
                    transition: (theme) =>
                      theme.transitions.create("all", {
                        duration: theme.transitions.duration.complex,
                        ease: theme.transitions.easing.easeInOut,
                      }),
                  },
                ]}
              />
            ) : (
              <MenuOutlinedIcon
                sx={[
                  {
                    transition: (theme) =>
                      theme.transitions.create("all", {
                        duration: theme.transitions.duration.complex,
                        ease: theme.transitions.easing.easeInOut,
                      }),
                  },
                ]}
              />
            )}
          </ThemeProvider>
        </div>
      </div>

      <div className={`menu absolutemenu ${showMenu ? "open" : ""}`}>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </>
  );
};

export default Header;
