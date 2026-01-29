import React, { useState } from "react";
import "./Question.css";

interface QuestionProps {
  onAnswered: () => void;
}

const Question: React.FC<QuestionProps> = ({ onAnswered }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoHover = (): void => {
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 100);
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = (): void => {
    createConfetti();
    onAnswered();
  };

  const createConfetti = (): void => {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.top = "-10px";
      confetti.style.background = Math.random() > 0.5 ? "#ff6b9d" : "#ffd6e8";
      confetti.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 4000);
    }
  };

  return (
    <div className="question-section">
      <h2>¿Quieres ser mi San Valentín?</h2>
      <div className="buttons">
        <button className="btn btn-yes" onClick={handleYesClick}>
          Sí ❤️
        </button>
        <button
          className="btn btn-no"
          style={{
            position: noButtonPosition.x > 0 ? "fixed" : "relative",
            left: noButtonPosition.x > 0 ? `${noButtonPosition.x}px` : "auto",
            top: noButtonPosition.y > 0 ? `${noButtonPosition.y}px` : "auto",
          }}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Question;
