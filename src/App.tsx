import React, { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Question from "./components/Question";
import Response from "./components/Response";

const App: React.FC = () => {
  const [answered, setAnswered] = useState(false);

  return (
    <div className="app">
      <div className="heart-background"></div>

      <div className="container">
        <h1 className="title">Laura ❤️</h1>

        <Gallery />

        {!answered ? (
          <Question onAnswered={() => setAnswered(true)} />
        ) : (
          <Response />
        )}
      </div>
    </div>
  );
};

export default App;
