import { useEffect, useState } from "react";

const MarkAnswer = (props) => {
  const { margins, answer, foundTargets } = props;
  const [list, setList] = useState(foundTargets)

  useEffect(() => {
      console.log("useEffect triggered");
      setList(foundTargets)
  },[foundTargets])
  
  return (
    <div className="answer-wrapper">
      {foundTargets.map((target) => {
        const answerStyle = {
          position: "absolute",
          left: answer[target][0] + margins[0] - 25,
          top: answer[target][1] + margins[1] - 25,
        };
        return <div className="answer" key={target} style={answerStyle}></div>;
      })}
    </div>
  );
};

export default MarkAnswer;
