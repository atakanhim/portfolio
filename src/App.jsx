import React from "react";
import Header from "./components/Header/Header";
import Mainpage from "./components/Mainpage/Mainpage";


import "./App.scss";

const App = () => {
  return (
    <div className="containerr">
      <Header />
      <Mainpage />
    </div>
  );
};

export default App;
