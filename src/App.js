import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import "./App.css";

const App = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <Header isActive={isActive} />
      <Image isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default App;
