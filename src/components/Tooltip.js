import { useEffect, useState, useRef } from "react";

const Tooltip = (props) => {
  const { lastClick, margins, answer, foundTargets, setFoundTargets} = props;
  const isMounted = useRef(false);
  const [styleDisplay, setStyleDisplay] = useState("none");
  const [styleLeft, setStyleLeft] = useState("");
  const [styleTop, setStyleTop] = useState("");

  const [targets, setTargets] = useState(["beemo", "jake", "lemongrab"]);

  const tooltipStyle = {
    display: styleDisplay,
    top: styleTop,
    left: styleLeft,
  };

  useEffect(() => {
    if (isMounted.current) {
      setStyleDisplay("block");
      setStyleLeft(lastClick[0] + margins[0] + 20 + "px");
      setStyleTop(lastClick[1] + margins[1] - 10 + "px");
    } else {
      isMounted.current = true;
    }
  }, [lastClick, margins]);

  const handleTargetClick = (e) => {
    setStyleDisplay("none");
    if (
      Math.abs(lastClick[0] - answer[e.target.id][0]) <= 50 &&
      Math.abs(lastClick[1] - answer[e.target.id][1]) <= 50
    ) {
      let tempTargets = [...targets.filter((item) => item !== e.target.id)];
      setTargets(tempTargets);
      let tempFoundTargets = foundTargets;
      tempFoundTargets.push(e.target.id);
      setFoundTargets(tempFoundTargets);
    } else {
      console.log("not close enough");
    }
  };

  return (
    <div className="tooltip" style={tooltipStyle}>
      <div className="tooltip-target">
        {targets.map((target) => (
          <span id={target} key={target} onClick={(e) => handleTargetClick(e)}>
            {target}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tooltip;
