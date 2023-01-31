import React from "react";
import "./Mainpage.scss";
const Mainpage = () => {
  const return100 = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(
        <div className="mainpage__item">
          <h2>Hi, I'm a Mainpage__item</h2>
        </div>
      );
    }
    return arr;
  };

  return (
    <div className="mainpage">
      <h1>Hi, I'm a Mainpage</h1>
      {return100()}
    </div>
  );
};

export default Mainpage;
