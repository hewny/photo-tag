import { useEffect, useState } from "react";

const Message = (props) => {
  const { messageID, setMessageID } = props;
  const [styleDisplay, setStyleDisplay] = useState("none");
  const [messageContent, setMessageContent] = useState("");

  const messageStyle = {
    display: styleDisplay,
  };

  useEffect(() => {
    switch (messageID) {
        case "no result":
          setMessageContent("No character found. Try again.");
          setStyleDisplay("block");
          break;
        case "beemo":
          setMessageContent("You have found Beemo!");
          setStyleDisplay("block");
          break;
        case "jake":
          setMessageContent("You have found Jake!");
          setStyleDisplay("block");
          break;
        case "lemongrab":
          setMessageContent("You have found Lemongrab!");
          setStyleDisplay("block");
          break;
        default:
          break;
      }

      const timer = setTimeout(() => {
        setStyleDisplay("none");
      }, 2000);
      return () => {
        clearTimeout(timer);
        setMessageID(null);
      };
  }, [messageID, setMessageID]);

  return (
    <div className="message" style={messageStyle}>
      {messageContent}
    </div>
  );
};

export default Message;
