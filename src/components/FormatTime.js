const FormatTime = (props) => {
  const { seconds } = props;
  let sec, min;

  if (seconds % 60 < 10) {
    sec = "0" + (seconds % 60);
  } else {
    sec = seconds % 60;
  }

  if (Math.floor(seconds / 60) < 10) {
    min = "0" + Math.floor(seconds / 60);
  } else {
    min = Math.floor(seconds / 60);
  }

  return (
    <>
      {min}:{sec}
    </>
  );
};

export default FormatTime;
