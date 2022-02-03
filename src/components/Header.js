import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import beemo from "../images/beemo.png";
import jake from "../images/jake.png";
import lemongrab from "../images/lemongrab.png";

const Header = (props) => {
  const { isActive } = props;
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        timeFormatter();
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const timeFormatter = () => {
    let sec, min

    if (seconds % 60 < 10) {
      sec = "0" + seconds % 60
    } else {
      sec = seconds % 60
    }

    if (Math.floor(seconds / 60) < 10) {
      min = "0" + Math.floor(seconds / 60)
    } else {
      min = Math.floor(seconds / 60)
    }

    return (
      <>
        {min}:{sec}
      </>
    );
  };

  return (
    <div className="header">
      <div className="header-text">Find the following characters</div>
      <span className="header-timer">{timeFormatter()}</span>
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
