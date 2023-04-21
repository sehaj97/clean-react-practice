import { useState } from "react";
import "./App.css";
function App() {
  const [emotion, setEmotion] = useState("happy");
  return (
    <div className="App">
      <h1>I am feeling {emotion}</h1>
      <h2>ai do something to make me feel good</h2>
      <button onClick={() => setEmotion("Sad")}>Sad</button>
      <button onClick={() => setEmotion("Happy")}>Happy</button>
    </div>
  );
}

export default App;
