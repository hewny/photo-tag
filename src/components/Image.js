import { useState } from "react";
import mainImage from "../images/adventure-time.png";
import MarkAnswer from "./MarkAnswer";
import Tooltip from "./Tooltip";

const Image = () => {
  const [lastClick, setLastClick] = useState([0, 0]);
  const [margins, setMargins] = useState([0, 0]);
  const [foundTargets, setFoundTargets] = useState([]);

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
      />
      <MarkAnswer
        margins={margins}
        answer={answer}
        foundTargets={foundTargets}
      />
    </div>
  );
};

export default Image;
