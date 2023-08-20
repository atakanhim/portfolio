import React from "react";
import Home from "./Home/Home";
import "./Mainpage.scss";
import MyProjects from "./Aboutme/MyProjects";
const Mainpage = () => {
  return (
    <div className="mainpage">
      <section id="home" >
        <Home />
      </section>
      <section id="myprojects" >
        <MyProjects />
      </section>

    </div>
  );
};

export default Mainpage;
