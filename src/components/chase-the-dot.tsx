"use client";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useEffect, useState } from "react";

export const ChaseTheDot = () => {
  const { x, y } = useMousePosition();
  const [dotPosition, setDotPosition] = useState({ top: 200, left: 300 });
  const [score, setScore] = useState(0);
  const [animateScore, setAnimateScore] = useState(false);

  useEffect(() => {
    const distance = Math.sqrt(
      Math.pow(x - dotPosition.left, 2) + Math.pow(y - dotPosition.top, 2)
    );

    if (distance < 30) {
      setDotPosition({
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
      });
    }
  }, [x, y, dotPosition]);

  const handleDotClick = () => {
    setScore((prev) => prev + 1);
    setAnimateScore(true);
    setTimeout(() => setAnimateScore(false), 300);
    setDotPosition({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
    });
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#f0f0f0",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          padding: "12px 24px",
          backgroundColor: "white",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "50px",
          border: "2px solid #3b82f6",
          color: "#3b82f6",
          fontWeight: "bold",
          fontSize: "1.25rem",
          transition: "transform 0.3s ease-in-out",
          transform: animateScore
            ? "translateX(-50%) scale(1.1)"
            : "translateX(-50%) scale(1)",
        }}
      >
        得分: {score}
      </div>

      <div
        onClick={handleDotClick}
        style={{
          position: "absolute",
          top: dotPosition.top,
          left: dotPosition.left,
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "top 0.2s, left 0.2s",
        }}
      ></div>
    </div>
  );
};
