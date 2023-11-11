import React, { useEffect, useRef, useState } from "react";

export const DotConnector = () => {
  const canvasRef = useRef(null);
  const [stars, setStars] = useState([]);
  // const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const x = 40;

    for (let i = 0; i < x; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.stroke();
      }

      for (let i = 0; i < stars.length; i++) {
        const starI = stars[i];

        for (let j = 0; j < stars.length; j++) {
          const starII = stars[j];
          if (distance(starI, starII) < 150) {
            ctx.beginPath();
            ctx.moveTo(starI.x, starI.y);
            ctx.lineTo(starII.x, starII.y);
            ctx.lineWidth = 0.05;
            ctx.strokeStyle = "white";
            ctx.stroke();
          }
        }
      }
    }

    function distance(point1, point2) {
      const xs = point2.x - point1.x;
      const ys = point2.y - point1.y;
      return Math.sqrt(xs * xs + ys * ys);
    }

    function update() {
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.x += s.vx / 60;
        s.y += s.vy / 60;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    }

    function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
    }

    tick();
  }, [stars]);

  return (
    <canvas
      ref={canvasRef}
      className="mobile:w-screen fixed bottom-0 left-0 right-0 top-0 -z-50 h-full w-full opacity-80"
    />
  );
};
