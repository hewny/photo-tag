import { useEffect, useState } from "react";
import FormatTime from "./FormatTime";

const Leaderboard = (props) => {
  const { leaderboardActive, setLeaderboardActive, leaderboard } = props;
  const [styleDisplay, setStyleDisplay] = useState("");

  const leaderboardStyle = {
    display: styleDisplay,
  };

  useEffect(() => {
    if (leaderboardActive) {
        setStyleDisplay("block")
    } else {
        setStyleDisplay("none")
    }
  },[leaderboardActive])

  return (
    <div className="header-leaderboard-table" style={leaderboardStyle}>
      <table>
        <tbody>
          <tr>
              <td></td>
            <td>Name</td>
            <td>Time</td>
          </tr>
          {leaderboard.map((leader, index) => (
            <tr key={index}>
                <td>{index+1}.</td>
              <td>{leader.name}</td>
              <td><FormatTime seconds={leader.time} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <span onClick={() => setLeaderboardActive(!leaderboardActive)}>Close</span>
    </div>
  );
};

export default Leaderboard;
