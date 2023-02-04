import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import Axios from "axios";
import fileDownload from "js-file-download";
import "./Home.scss";
const Home = () => {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef.current);
    //const myElement = document.querySelector('#myElement')
    init(textRef.current, {
      showCursor: true,
      backDelay: 1900,
      startDelay: 500,
      strings: ["Engineer", "Developer"],
    });
  }, []);

  const downloadCv = (e) => {
    e.preventDefault();
    // get url from .env

    Axios.get(process.env.PORTFOLIO, {
      responseType: "blob",
      method: "GET",
    }).then((res) => {
      fileDownload(res.data, "cv.pdf");
    });
  };

  return (
    <div className="homecontainer">
      <div className="homeleft">
        <h3>Hello, I am</h3>

        <h1>Atakan Him</h1>

        <h3>
          I Am Passionate Software <span ref={textRef}></span>
        </h3>
        <p>
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
        <button onClick={(e) => downloadCv(e)}>Download Cv</button>
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
