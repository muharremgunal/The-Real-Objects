import { useState, useEffect } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed text-white border-[#DCDC28] border-2 rounded-full pointer-events-none z-50"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: "30px",
        height: "30px",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/*  <span className="text-xs text-black">The Real Project!</span> */}
    </div>
  );
}
