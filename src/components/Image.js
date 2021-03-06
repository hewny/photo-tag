import { useEffect, useState } from "react";
import mainImage from "../images/adventure-time.png";
import MarkAnswer from "./MarkAnswer";
import Tooltip from "./Tooltip";
import Message from "./Message";

const Image = (props) => {
  const { isActive, setIsActive } = props;
  const [lastClick, setLastClick] = useState([0, 0]);
  const [margins, setMargins] = useState([0, 0]);
  const [foundTargets, setFoundTargets] = useState([]);
  const [messageID, setMessageID] = useState(null);

  useEffect(() => {
    if (foundTargets.length === 3) {
      setIsActive(!isActive);
    }
  },[foundTargets]);

  const answer = {
    beemo: [712, 304],
    jake: [1130, 136],
    lemongrab: [181, 332],
  };

  const handleImageClick = (e) => {
    setLastClick([
      e.pageX - e.nativeEvent.target.offsetLeft,
      e.pageY - e.nativeEvent.target.offsetTop,
    ]);
    setMargins([
      e.nativeEvent.target.offsetLeft,
      e.nativeEvent.target.offsetTop,
    ]);
  };

  return (
    <div className="image-wrapper">
      <img
        src={mainImage}
        alt="main"
        draggable="false"
        onClick={(e) => handleImageClick(e)}
      ></img>
      <Tooltip
        lastClick={lastClick}
        margins={margins}
        answer={answer}
        foundTargets={foundTargets}
        setFoundTargets={setFoundTargets}
        setMessageID={setMessageID}
      />
      <MarkAnswer
        margins={margins}
        answer={answer}
        foundTargets={foundTargets}
      />
      <Message messageID={messageID} setMessageID={setMessageID} />
    </div>
  );
};

export default Image;
