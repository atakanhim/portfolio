import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import Axios from "axios";
import fileDownload from "js-file-download";
import "./Home.scss";
const Home = () => {
  const textRef = useRef();
  useEffect(() => {
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
    console.log(process.env.REACT_APP_API);
    try {
      Axios.get(`${process.env.REACT_APP_API}/downloadCv`, {
        responseType: "blob",
      }).then((res) => {
        fileDownload(res.data, "AtakanHim_CV.pdf");
      });
    } catch (err) {
      console.log(err);
    }
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
          src="https://avatarfiles.alphacoders.com/319/319262.jpg"
          alt="home-banner"
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default Home;
