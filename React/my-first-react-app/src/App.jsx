import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // useEffect will take place each time state has changed
  // At the end of the useffect we tag on a dependency array with the state of hasLiked
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  // With an empty dependency array - the use case will run only once (on the mounting of the component)
  useEffect(() => {}, []);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} <br /> {count}
      </h2>

      {/* Callback function to set setHasLiked in the state object to true  */}
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;
