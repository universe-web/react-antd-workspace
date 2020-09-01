import React, { useRef, useEffect } from "react";

const wrapperStyle = {
  width: "100%",
  height: "900px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "gray",
};

function One() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(50, 50, 50, 1.5 * Math.PI, 0.5 * Math.PI, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc(50, 50, 50, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc(50, 25, 25, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(50, 75, 25, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(50, 25, 8, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc(50, 75, 8, 0, 2 * Math.PI);
    ctx.fill();
  });

  return (
    <div style={wrapperStyle}>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default One;
