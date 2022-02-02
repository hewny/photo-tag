import { useState } from "react";
import mainImage from "../images/adventure-time.png";

const Image = () => {
  const [styleDisplay, setStyleDisplay] = useState("none");
  const [styleLeft, setStyleLeft] = useState("");
  const [styleTop, setStyleTop] = useState("");

  const myStyle = {
    display: styleDisplay,
    top: styleTop,
    left: styleLeft,
  };

  const handleImageClick = (e) => {
    console.log(
      e.pageX - e.nativeEvent.target.offsetLeft,
      e.pageY - e.nativeEvent.target.offsetTop
    );
    console.log("margin left of image", e.nativeEvent.target.offsetLeft);
    console.log("margin top of image", e.nativeEvent.target.offsetTop);

    setStyleDisplay("block");
    setStyleLeft(e.pageX + 20 + "px");
    setStyleTop(e.pageY - 10 + "px");
  };

  const handleTargetClick = (e) => {
      setStyleDisplay("none")
  }

  return (
    <div className="image-wrapper">
      <img
        src={mainImage}
        alt="main"
        draggable="false"
        onClick={(e) => handleImageClick(e)}
      ></img>
      <div className="tooltip" style={myStyle}>
        <div className="tooltip-target">
          <span onClick={(e) => handleTargetClick(e)}>Beemo</span>
          <span onClick={(e) => handleTargetClick(e)}>Jake</span>
          <span onClick={(e) => handleTargetClick(e)}>Lemongrab</span>
        </div>
      </div>
    </div>
  );
};

export default Image;
