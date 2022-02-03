import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import beemo from "../images/beemo.png";
import jake from "../images/jake.png";
import lemongrab from "../images/lemongrab.png";
import Leaderboard from "./Leaderboard";
import FormatTime from "./FormatTime";
import SubmitWindow from './SubmitWindow'

const Header = (props) => {
  const { isActive } = props;
  const [seconds, setSeconds] = useState(0);
  const [leaderboardActive, setLeaderboardActive] = useState(false)
  const [leaderboard] = useState([
    { name: "John", time: 20 },
    { name: "Joe", time: 65 },
    { name: "Bob", time: 123 },
    { name: "John", time: 20 },
    { name: "Joe", time: 65 },
    { name: "Bob", time: 123 },
    { name: "John", time: 20 },
    { name: "Joe", time: 65 },
    { name: "Bob", time: 123 },
    { name: "John", time: 20 },
  ]);
  const [name, setName] = useState("")

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="header">
      <div className="header-text">Find the following characters</div>

      <span className="header-leaderboard" onClick={() => setLeaderboardActive(!leaderboardActive)}>
        Leaderboard
      </span>
      <span className="header-timer"><FormatTime seconds={seconds} /></span>
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
      <Leaderboard leaderboardActive={leaderboardActive} setLeaderboardActive={setLeaderboardActive} leaderboard={leaderboard} />
      <SubmitWindow isActive={isActive} seconds={seconds} name={name} setName={setName} />
    </div>
  );
};

export default Header;
