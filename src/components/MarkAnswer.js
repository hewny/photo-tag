const MarkAnswer = (props) => {
  const { margins, answer, foundTargets } = props;
  
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
