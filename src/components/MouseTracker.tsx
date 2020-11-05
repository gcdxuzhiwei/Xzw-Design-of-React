import React, { useState, useEffect } from "react";

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("add", positions.x);
    const updateMouse = (e: MouseEvent) => {
      console.log("inner");
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updateMouse);
    return () => {
      console.log("remove", positions.x);
      document.removeEventListener("click", updateMouse);
    };
  });
  console.log("beforerender", positions.x);
  return (
    <p>
      x:{positions.x},y:{positions.y}
    </p>
  );
};

export default MouseTracker;
