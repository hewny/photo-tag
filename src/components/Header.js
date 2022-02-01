import React from "react";
import beemo from "../images/beemo.png";
import jake from "../images/jake.png";
import lemongrab from "../images/lemongrab.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">Find the following characters: </div>
      <div className="header-target">
        <span>
          <h1>Beemo</h1>
          <img src={beemo} alt="beemo" draggable="false"></img>
        </span>
        <span>
          <h1>Jake</h1>
          <img src={jake} alt="jake" draggable="false"></img>
        </span>
        <span>
          <h1>Lemongrab</h1>
          <img src={lemongrab} alt="lemongrab" draggable="false"></img>
        </span>
      </div>
    </div>
  );
};

export default Header;