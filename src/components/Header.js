import { useEffect, useState } from "react";
import beemo from "../images/beemo.png";
import jake from "../images/jake.png";
import lemongrab from "../images/lemongrab.png";
import Leaderboard from "./Leaderboard";
import FormatTime from "./FormatTime";
import SubmitWindow from "./SubmitWindow";
import { db } from "./firebase/firebase";
import {
  query,
  collection,
  orderBy,
  limit,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const Header = (props) => {
  const { isActive } = props;
  const [seconds, setSeconds] = useState(0);
  const [leaderboardActive, setLeaderboardActive] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [name, setName] = useState("");

  const loadLeaderboard = () => {
    // create query and load top 10
    const leaderboardQuery = query(
      collection(db, "leaderboard"),
      orderBy("seconds", "asc"),
      limit(10)
    );

    // /////////////
    // start listening to query
    onSnapshot(leaderboardQuery, async (snapshot) => {
      // set the leaderboard with initial 10 results
      if (snapshot.docChanges().length === 10) {
        const querySnapshot = await getDocs(leaderboardQuery);
        let list = [];
        querySnapshot.forEach((doc) => {
          let info = { name: doc.data().name, time: doc.data().seconds };
          list.push(info);
        });
        setLeaderboard(list);
      }
      // adjust leaderborad with further changes
      if (snapshot.docChanges().length < 10) {
        snapshot.docChanges().forEach((change) => {
          let name = change.doc.data().name;
          let time = change.doc.data().seconds;
          let type = change.type;
          let newIndex = change.newIndex;
          let oldIndex = change.oldIndex;
          handleEvent(name, time, type, newIndex, oldIndex);
        });
      }
    });
  };

  const handleEvent = (name, time, type, newIndex, oldIndex) => {
    if (type === "added") {
      setLeaderboard((leaderboard) => {
        let list = [...leaderboard];
        list.splice(newIndex, 0, { name: name, time: time });
        return list;
      });

      if (type === "removed") {
        setLeaderboard((leaderboard) => {
          let list = [...leaderboard];
          list.splice(oldIndex, 1);
          return list;
        });
      }
    }
  };

  useEffect(() => {
    loadLeaderboard();
  }, []);

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

      <span
        className="header-leaderboard"
        onClick={() => setLeaderboardActive(!leaderboardActive)}
      >
        Leaderboard
      </span>
      <span className="header-timer">
        <FormatTime seconds={seconds} />
      </span>
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
      <Leaderboard
        leaderboardActive={leaderboardActive}
        setLeaderboardActive={setLeaderboardActive}
        leaderboard={leaderboard}
      />
      <SubmitWindow
        isActive={isActive}
        seconds={seconds}
        name={name}
        setName={setName}
      />
    </div>
  );
};

export default Header;
