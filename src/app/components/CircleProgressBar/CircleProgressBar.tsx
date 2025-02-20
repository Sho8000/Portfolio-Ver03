"use client"
import { useEffect, useState } from "react";

const CircleProgressBar = () => {
  const [count, setCount] = useState(0);
  const circleSize = 304;
  const radius = 150;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * count) / 100

  useEffect(() => {
    let start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const newCount = Math.min(100, Math.floor((elapsed / 1000) * 100));
      setCount(newCount);
      if (newCount >= 100) {
        clearInterval(interval);
      }
    }, 10); // Update every 10ms for smooth animation

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <svg
        width={circleSize}
        height={circleSize}
        viewBox={`0 0 ${circleSize} ${circleSize}`}
      >
        <circle
          cx={circleSize/2}
          cy={circleSize/2}
          strokeWidth={"2px"}
          r={radius}
          fill="none"
          stroke="white"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${circleSize/2} ${circleSize/2})`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CircleProgressBar;
