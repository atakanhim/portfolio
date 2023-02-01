import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div className="homecontainer">
      <div className="homeleft">
        <h3>Hello, I am</h3>

        <h1>Atakan Him</h1>

        <h3>I Am Passionate Web Designer</h3>
        <p>
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
        <button>Download Cv</button>
      </div>
      <div className="homeright">
        <img
          src="https://sergio-react.vercel.app/static/img/home-banner.png"
          alt="home-banner"
        />
      </div>
    </div>
  );
};

export default Home;
