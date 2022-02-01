import "./App.css";
import Header from "./components/Header";
import image from "./images/adventure-time.png";
import "./App.css";

const App = () => {
  const handleClick = (e) => {
    console.log(e.pageX-e.nativeEvent.target.offsetLeft, e.pageY - 160);
    console.log('margin left of image', e.nativeEvent.target.offsetLeft);
  };

  return (
    <div>
      <Header />
      <div className="image-wrapper">
        <img
          src={image}
          alt="main"
          draggable="false"
          onClick={(e) => handleClick(e)}
        ></img>
      </div>
    </div>
  );
};

export default App;
