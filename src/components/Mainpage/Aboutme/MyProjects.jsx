import React from "react";
import screen1 from "../../../public/images/screen1.png"
import "./MyProjects.scss";
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

const MyProjects = () => {


  return (
    <div className="projectsContainer">
      <div className="cardContainer">
        <div className="card">
          <div className="cardTop">
            {/* Full Size Fill Resim eklenecek */}
            <img src={screen1} className="App-logo" alt="logo" />
          </div>

          <div className="cardMiddle">
            <div className="badgeContainer">

              <span className="badgeItem">Item1</span>
              <span className="badgeItem">Item1</span>
              <span className="badgeItem">Item1</span>
              <span className="badgeItem">Item1</span>
              <span className="badgeItem">Item1</span>

            </div>
          </div>

          <div className="cardBottom">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae, aliquid labore? Quia, similique iusto!
              Beatae rerum quos at quisquam. Incidunt ullam tempora exercitationem,
              delectus corporis adipisci deleniti assumenda magni eius!</p>
          </div>
          <div className="cardButton">
            <a href="#" className="">Preview <HiMiniMagnifyingGlass /></a>
          </div>
        </div>
        <div className="card">

        </div>
        <div className="card">

        </div>
      </div>
    </div>
  );
};

export default MyProjects;
