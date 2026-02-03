import React, { useEffect } from "react";
import "./Response.css";

const Response: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = "-50px";
      heart.style.fontSize = "2em";
      heart.style.opacity = "0.3";
      heart.style.pointerEvents = "none";
      heart.style.animation = `fall ${5 + Math.random() * 3}s linear forwards`;
      heart.style.zIndex = "10";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 8000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="respuesta">
      <h2>¡ME ENCANTAS! 💕</h2>
      <p>
        Vístete hermoso mi vida, nos vemos el viernes 20 para el{" "}
        <a
          href="https://festivalondas.com/wp-content/uploads/2025/11/OOTD_JQ.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          Festival Ondas
        </a>
        .
      </p>
      <p className="subtitle">Te amo ❤️</p>
    </div>
  );
};

export default Response;
